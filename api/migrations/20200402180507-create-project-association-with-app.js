"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // App.belongsTo(Organization);
    return queryInterface.addColumn("App", "organization_id", {
      type: Sequelize.UUID,
      references: {
        model: "Organization",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("App", "organization_id");
  },
};
