'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mission.init({
    ProfileId:{
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    PlanteId:{
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    description:{
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Mission',
  });
  return Mission;
};