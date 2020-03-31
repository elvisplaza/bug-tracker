"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      age: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: 0
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
      },
      display_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ""
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
  Profile.associate = function(models) {
    Profile.belongsTo(models.NotificationPreference);
  };
  return Profile;
};
