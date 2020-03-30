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
      email: {
        type: DataTypes.UUID,
        allowNull: false
      },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: true
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
    User.belongsTo(models.Organization);
    User.hasOne(models.Profile);
  };
  return User;
};
