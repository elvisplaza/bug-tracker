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
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      project: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    },
    {}
  );
  NotificationPreference.associate = function(models) {
    NotificationPreference.hasOne(models.Profile);
  };
  return NotificationPreference;
};
