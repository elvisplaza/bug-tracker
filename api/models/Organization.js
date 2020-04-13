"use strict";
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define(
    "Organization",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        defaultValue: "Organization Name",
      },
      created_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  Organization.associate = function (models) {
    Organization.hasMany(models.User, { foreignKey: "organization_id", as: "user_company" });
    Organization.hasMany(models.App, { foreignKey: "organization_id", as: "organization" });
  };
  return Organization;
};
