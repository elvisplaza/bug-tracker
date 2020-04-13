"use strict";
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    "Profile",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      age: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: 0,
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      display_name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: "User",
          key: "id",
        },
      },
      notification_preference_id: {
        type: DataTypes.UUID,
        references: {
          model: "NotificationPreference",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
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
    {
      underscored: true,
      freezeTableName: true,
    }
  );
  Profile.associate = function (models) {
    Profile.belongsTo(models.NotificationPreference, {
      foreignKey: "notification_preference_id",
      as: "notification_preference",
    });
    Profile.belongsTo(models.User, { foreignKey: "user_id", as: "user_profile" });
  };
  return Profile;
};
