'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user_history',
      });
    }
  }
  History.init(
    {
      score: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'History',
    }
  );
  return History;
};
