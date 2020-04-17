"use strict";
const { hashPassword } = require("./../utils/passwordService");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_email_valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      is_phone_valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      organization_id: {
        type: DataTypes.UUID,
        references: {
          model: "Organization",
          key: "id",
        },
      },
      // user_app_id: {
      //   type: DataTypes.UUID,
      //   references: {
      //     model: "UserApp",
      //     key: "id",
      //   },
      //   onUpdate: "CASCADE",
      //   onDelete: "SET NULL",
      // },
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
      hooks: {
        beforeCreate: async (user, options) => {
          try {
            user.password = await hashPassword(user.password, 10);
          } catch (err) {
            throw err;
          }
        },
      },
    }
  );
  User.associate = function (models) {
    User.belongsTo(models.Organization, { foreignKey: "organization_id", as: "user_company" });
    User.hasOne(models.Profile, { foreignKey: "user_id", as: "user_profile" });
    User.belongsToMany(models.App, { through: models.UserApp, as: "company_apps", foreignKey: "user_id" });
  };
  return User;
};
