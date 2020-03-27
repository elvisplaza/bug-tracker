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
        organization_id: {
          type: Sequelize.UUID,
          references: {
            model: "User",
            key: "id"
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL"
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
          allowNull: true,
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
