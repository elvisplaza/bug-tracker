"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      is_email_valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      is_phone_valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    },
    {}
  );
  User.associate = function(models) {
    User.hasOne(models.Profile);
  };
  return User;
};
