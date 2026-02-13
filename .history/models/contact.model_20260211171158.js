const sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING(255),
      },
      phone: {
        type: DataTypes.STRING(30),
      },
      service: {
        type: DataTypes.STRING(255),
      },
      message: {
        type: DataTypes.TEXT,
      },
      status:{
        type: DataTypes.INTEGER(10),
      },
      created_at: {
        type: DataTypes.DATE
      },
      updated_at: {
        type: DataTypes.DATE
      }
    }, {
      tableName: 'contact',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: false
    });
    
    return Contact;
  };
  