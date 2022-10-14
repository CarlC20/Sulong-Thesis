const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define(
    'inventory',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      item_name: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  return Inventory;
};
