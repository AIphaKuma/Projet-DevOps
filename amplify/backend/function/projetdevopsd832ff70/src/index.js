const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const dynamoDB = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('http').Server}
 */
const server = awsServerlessExpress.createServer(app);

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log("Evénement reçu:", JSON.stringify(event, null, 2));

  for (const record of event.Records) {
    const bucket = record.s3.bucket.name;
    const key = record.s3.object.key;

    try {
      // Télécharger le fichier dans S3
      const uploadParams = {
        Bucket: bucket,
        Key: key,
        Body: record.body
      };
      await s3.putObject(uploadParams).promise();
      console.log('Upload réussi');

      // Construire l'URL de l'image
      const imageUrl = `https://${bucket}.s3.amazonaws.com/${key}`;

      // Mettre à jour DynamoDB avec l'URL de l'image
      const userId = event.request.userAttributes.sub // Récupérer l'ID de l'utilisateur
      const updateParams = {
        TableName: 'usersbis-env',
        Key: { 'id': userId },
        UpdateExpression: 'set imageUrl = :url',
        ExpressionAttributeValues: {
          ':url': imageUrl
        },
        ReturnValues: 'UPDATED_NEW'
      };
      await dynamoDB.update(updateParams).promise();
      console.log('Mise à jour de DynamoDB réussie');

    } catch (err) {
      console.error('Erreur lors de l\'upload ou de la mise à jour DynamoDB:', err);
    }
  }
};
