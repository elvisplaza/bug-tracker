"use strict";
module.exports = (sequelize, DataTypes) => {
  const App = sequelize.define(
    "App",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      client_language: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "javascript",
      },
      server_language: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "node",
      },
      database_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_updated: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      website_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      organization: {
        type: DataTypes.UUID,
        references: {
          model: "Organization",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      bugs: {
        type: DataTypes.UUID,
        references: {
          model: "Bug",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      // deletedAt: {
      //   allowNull: true,
      //   type: DataTypes.DATE,
      // },
    },

    { freezeTableName: true }
  );
  App.associate = function (models) {
    // associations can be defined here
    App.belongsTo(models.Organization, { foreignKey: "organization" });
    App.hasMany(models.Bug, { foreignKey: "bugs" });
  };
  return App;
};
