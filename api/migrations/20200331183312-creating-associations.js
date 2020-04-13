"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Profile belongsTo NotificationPreference
    return queryInterface
      .addColumn("Profile", "notification_preference_id", {
        type: Sequelize.UUID,
        references: {
          model: "NotificationPreference",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      })
      .then(() => {
        // Profile belongsTo User
        return queryInterface.addColumn("Profile", "user_id", {
          type: Sequelize.UUID,
          references: {
            model: "User",
            key: "id",
          },
        });
      })
      .then(() => {
        // User belongsTo Organization
        return queryInterface.addColumn("User", "organization_id", {
          type: Sequelize.UUID,
          references: {
            model: "Organization",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn("Profile", "notification_preference_id")
      .then(() => {
        return queryInterface.removeColumn("Profile", "user_id");
      })
      .then(() => {
        return queryInterface.removeColumn("User", "organization_id");
      });
  },
};
