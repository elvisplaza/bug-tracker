"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "User",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        is_email_valid: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        is_phone_valid: {
          type: Sequelize.BOOLEAN,
          allowNull: false
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        projects: {
          type: Sequelize.ARRAY(Sequelize.TEXT),
          allowNull: false,
          defaultValue: []
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        underscored: true
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("User");
  }
};
