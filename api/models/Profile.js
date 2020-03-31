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
      notification_preference: {
        type: DataTypes.UUID,
        references: {
          model: "NotificationPreference",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      user: {
        type: DataTypes.UUID,
        references: {
          model: "User",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
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
    { freezeTableName: true }
  );
  Profile.associate = function(models) {
    Profile.belongsTo(models.NotificationPreference);
    Profile.belongsTo(models.User);
  };
  return Profile;
};
