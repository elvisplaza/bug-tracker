"use strict";
module.exports = (sequelize, DataTypes) => {
  const NotificationPreference = sequelize.define(
    "NotificationPreference",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      marketing: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      project: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    { underscored: true, freezeTableName: true }
  );
  NotificationPreference.associate = function (models) {
    NotificationPreference.hasOne(models.Profile, {
      foreignKey: "notification_preference_id",
      as: "notification_preference",
    });
  };
  return NotificationPreference;
};
