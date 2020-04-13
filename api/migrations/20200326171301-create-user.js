"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "User",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },

        is_email_valid: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone_number: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        is_phone_valid: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deleted_at: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
        freezeTableName: true,
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("User");
  },
};
