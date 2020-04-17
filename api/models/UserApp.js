"use strict";
module.exports = (sequelize, DataTypes) => {
  const UserApp = sequelize.define(
    "UserApp",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,

        primaryKey: false,
        unique: "unique-genre-per-post",
      },
      app_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        unique: "unique-genre-per-post",
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
    },
    {
      freezeTableName: true,
      underscored: true,
    }
  );
  UserApp.associate = function (models) {
    UserApp.belongsTo(models.User, { foreignKey: "user_id", as: "company_apps", targetKey: "id" });
    UserApp.belongsTo(models.App, { foreignKey: "app_id", as: "company_users", targetKey: "id" });
  };
  return UserApp;
};
