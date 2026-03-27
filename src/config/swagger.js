import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
  openapi: "3.0.0",
  info: {
  title: "Relax Map API",
  version: "1.0.0",
  description: "API for travel locations platform",
},
  servers: [
{
  url: "https://relax-map-backend-api.onrender.com",
},
],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },

    schemas: {
      Location: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "68d568270e6bcc357e9833e8",
          },
          name: {
            type: "string",
            example: "Сонячна Рів'єра",
          },
          image: {
            type: "string",
            example: "https://example.com/image.webp",
          },
          locationType: {
            type: "string",
            example: "more",
          },
          region: {
            type: "string",
            example: "odeshchyna",
          },
          rate: {
            type: "number",
            example: 4.5,
          },
          description: {
            type: "string",
            example: "Beautiful place near the sea...",
          },
          coordinates: {
            type: "object",
            properties: {
              lat: {
                type: "number",
                example: 46.0263,
              },
              lon: {
                type: "number",
                example: 30.4577,
              },
            },
          },
          ownerId: {
            type: "string",
            example: "6881563901add19ee16fcff5",
          },
          feedbacksId: {
            type: "array",
            items: {
              type: "string",
              example: "65f1a2b3c4d5e6f7a8b9c001",
            },
          },
        },
      },

      Feedback: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "65f1a2b3c4d5e6f7a8b9c001",
          },
          rate: {
            type: "number",
            example: 5,
          },
          description: {
            type: "string",
            example: "Amazing place!",
          },
          userName: {
            type: "string",
            example: "Олександр Коваленко",
          },
        },
      },

      Region: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "68d5213e0e6bcc357e9833b0",
          },
          region: {
            type: "string",
            example: "Поділля",
          },
          slug: {
            type: "string",
            example: "podillya",
          },
          level: {
            type: "string",
            example: "регіональне",
          },
          note: {
            type: "string",
            example: "Історичний регіон...",
          },
        },
      },

      LocationType: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "68d51e2e0e6bcc357e9833a0",
          },
          type: {
            type: "string",
            example: "Озеро",
          },
          slug: {
            type: "string",
            example: "ozero",
          },
          shortDescription: {
            type: "string",
            example: "Relax near water",
          },
        },
      },

      User: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            example: "6881563901add19ee16fcff5",
          },
          name: {
            type: "string",
            example: "Дмитро Романенко",
          },
          avatarUrl: {
            type: "string",
            example: "https://example.com/avatar.webp",
          },
          articlesAmount: {
            type: "number",
            example: 13,
          },
        },
      },
    },
  },

  security: [
    {
      bearerAuth: [],
    },
  ],
},

apis: ["./src/routes/**/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
