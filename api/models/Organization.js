"use strict";
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "Organization",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "Organization Name"
      },
      admin: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
      },
      apps: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue: []
      }
    },
    {}
  );
  Organization.associate = function(models) {
    Organization.hasMany(models.User);
  };
  return Organization;
};
