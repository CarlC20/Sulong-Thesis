const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define(
    'roles',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      role_name: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  return Roles;
};
