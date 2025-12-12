const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'Documentation for the API',
  },
  tags: [
    {
      name: 'Users',
      description: 'Operations about users',
    },
    {
      name: 'Roles',
      description: 'Operations about roles',
    },
    {
      name: 'Products',
      description: 'Operations about products',
    },
  ],
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 8080}/api/v1`,
      description: 'Development server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    },
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4caa'
          },
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@example.com'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      UserInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'John Doe'
          },
          email: {
            type: 'string',
            example: 'jhon.doe@exmaple.com'
          },
          password: {
            type: 'string',
            example: 'password123'
          },
          roles: {
            type: 'array',
            items: {
              type: 'string'
            },
            example: ['user']
          }
        }
      },
      Role: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60c72b2f9b1e8a001f8e4cab'
          },
          name: {
            type: 'string',
            example: 'admin'
          }
        }
      },
      RoleInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'admin'
          }
        }
      },
      Product: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '60d21b4667d0d8992e610c85'
          },
          name: {
            type: 'string',
            example: 'Laptop'
          },
          description: {
            type: 'string',
            example: 'A powerful laptop'
          },
          price: {
            type: 'number',
            example: 1200
          },
          stock: {
            type: 'integer',
            example: 50
          },
          category: {
            type: 'string',
            example: 'Electronics'
          },
          imageUrl: {
            type: 'string',
            example: 'http://example.com/image.png'
          }
        }
      },
      ProductInput: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            example: 'Laptop'
          },
          description: {
            type: 'string',
            example: 'A powerful laptop'
          },
          price: {
            type: 'number',
            example: 1200
          },
          stock: {
            type: 'integer',
            example: 50
          },
          category: {
            type: 'string',
            example: 'Electronics'
          },
          imageUrl: {
            type: 'string',
            example: 'http://example.com/image.png'
          }
        }
      }
    }
  },
  security: [{
    bearerAuth: []
  }]
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./src/presentation/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
