'use strict';

var bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    middlename: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname2: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    idRoll: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    idEmployee: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    }
  }, {
    hooks: {
      beforeCreate: function beforeCreate(User, options) {
        var password = User.password;
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        User.password = hash;
      }
    }
  });

  User.associate = function (models) {// associations can be defined here
  };

  return User;
};