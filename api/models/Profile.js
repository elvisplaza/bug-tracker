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
      organization: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: {}
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
        allowNull: false,
        defaultValue: ""
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
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: {}
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: "User",
          key: "id"
        }
      }
    },
    {}
  );
  Profile.associate = function(models) {
    Profile.belongsTo(models.User);
  };
  return Profile;
};
