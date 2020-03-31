"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "NotificationPreference",
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV1,
          primaryKey: true
        },
        marketing: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
        },
        project: {
          type: Sequelize.BOOLEAN,
          defaultValue: true
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
        // freezeTableName: true
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("NotificationPreference");
  }
};
