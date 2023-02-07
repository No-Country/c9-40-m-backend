const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_tecnology.init(sequelize, DataTypes);
}

class user_tecnology extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    tecnolgy_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tecnology',
        key: 'id'
      }
    },
    years_tecnology: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_tecnology',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "user_tecnology_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
