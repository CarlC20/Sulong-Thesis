const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Requests = sequelize.define(
    'requests',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      inventory_id: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  // Requests.associate = (model) => {
  //     Requests.belongsTo(model.Invetory, {
  //         as: 'inventory', foreignKey: 'inventory_id'
  //     })
  // }

  return Requests;
};
