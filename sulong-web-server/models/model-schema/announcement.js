const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Announcements = sequelize.define(
    'announcements',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.STRING,
      cover_url: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  return Announcements;
};
