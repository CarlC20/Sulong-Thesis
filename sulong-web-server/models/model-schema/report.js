const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Reports = sequelize.define(
    'reports',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      type: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  return Reports;
};
