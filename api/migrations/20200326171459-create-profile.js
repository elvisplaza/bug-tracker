"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "Profile",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        organization: {
          type: Sequelize.JSON,
          allowNull: true
        },
        age: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: 0
        },
        is_admin: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        first_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        display_name: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: ""
        },
        notification_preference: {
          type: Sequelize.JSON,
          allowNull: true
        },
        user_id: {
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
    return queryInterface.dropTable("Profile");
  }
};
