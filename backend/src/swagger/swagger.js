import swaggerJsdoc from 'swagger-jsdoc';
const { version } = require('../../package.json');

/*
  Open API
  - https://swagger.io/docs/specification/about
  - https://swagger.io/specification
*/

const url = 'http://localhost:8000';

const swaggerDefinition = {
  info: {
    contact: {
      email: 'wangjin8855@hotmail.com',
      name: 'Jin Wang',
    },
    description: 'Custom structure to build an REST API using Express.js',
    license: {
      name: 'All Rights Reserved',
    },
    title: 'Custom structure to build an REST API using Express.js',
    version,
  },
  openapi: '3.0.0',
  produces: ['application/json'],
  servers: [{ url }],
  tags: [
    {
      description: 'Albums',
      name: 'Albums',
    },
  ],
  'x-tagGroups': [
    {
      name: 'General',
      tags: ['Albums'],
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        bearerFormat: 'JWT',
        scheme: 'bearer',
        type: 'http',
      },
    },
  },
};

const route = fileName => `./src/routes/${fileName}.js`;

const apis = [route('albums'), route('photos')];

const options = {
  apis,
  basePath: '/',
  swaggerDefinition,
};

export const swaggerSpec = swaggerJsdoc(options);
