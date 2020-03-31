"use strict";
module.exports = (sequelize, DataTypes) => {
  const NotificationPreference = sequelize.define(
    "NotificationPreference",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      marketing: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      project: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE
      }
    },
    {}
  );
  NotificationPreference.associate = function(models) {
    NotificationPreference.hasOne(models.Profile);
  };
  return NotificationPreference;
};
