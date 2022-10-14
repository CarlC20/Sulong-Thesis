const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define(
    'reservation',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      event_id: DataTypes.STRING,
      event_type: DataTypes.STRING,
      facility: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  // Reservation.associate = (model) => {
  //     Reservation.belongsTo(model.Event, {
  //         as: 'event' , foreignKey: 'event_id'
  //     })
  // }

  return Reservation;
};
