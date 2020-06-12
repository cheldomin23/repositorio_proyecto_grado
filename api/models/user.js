'use strict';
let bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {type: DataTypes.STRING,allowNull: false },
    middlename: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    lastname: {type: DataTypes.STRING, allowNull: false},
    lastname2: {type: DataTypes.STRING, allowNull: true, defaultValue: null},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    active: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    idRoll: {type: DataTypes.INTEGER, allowNull: true, defaultValue: null},
    idEmployee: {type: DataTypes.INTEGER, allowNull: true, defaultValue: null}
  }, {
    hooks: {
      beforeCreate: (User,options) => {
        const { password } = User;
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password,salt);
        User.password = hash;

      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};