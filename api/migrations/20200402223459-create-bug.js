"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Bug", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
      },
      risk_level: {
        type: Sequelize.STRING,
      },
      is_fixed: {
        type: Sequelize.BOOLEAN,
      },
      path: {
        type: Sequelize.STRING,
      },
      expected_result: {
        type: Sequelize.STRING,
      },
      actual_outcome: {
        type: Sequelize.STRING,
      },
      steps_to_fix: {
        type: Sequelize.STRING,
      },
      deleteAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Bug");
  },
};
