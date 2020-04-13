"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    // App.hasMany(bug);

    return queryInterface.addColumn("Bug", "app_id", {
      type: Sequelize.UUID,
      references: {
        model: "App",
        key: "id",
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Bug", "app_id");
  },
};
