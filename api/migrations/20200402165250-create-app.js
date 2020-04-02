"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("App", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      client_language: {
        type: Sequelize.STRING
      },
      server_language: {
        type: Sequelize.STRING
      },
      database_type: {
        type: Sequelize.STRING
      },
      last_updated: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      website_url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("App");
  }
};
