"use strict";

module.exports = (sequelize, DataTypes) => {
  const Bug = sequelize.define(
    "Bug",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      risk_level: {
        type: DataTypes.STRING
      },
      is_fixed: {
        type: DataTypes.BOOLEAN
      },
      path: {
        type: DataTypes.STRING
      },
      expected_result: {
        type: DataTypes.STRING
      },
      actual_outcome: {
        type: DataTypes.STRING
      },
      steps_to_fix: {
        type: DataTypes.STRING
      },
      deleteAt: {
        type: DataTypes.DATE,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      freezeTableName: true
    }
  );
  Bug.associate = function(models) {
    // associations can be defined here
    Bug.belongsTo(models.App);
  };
  return Bug;
};
