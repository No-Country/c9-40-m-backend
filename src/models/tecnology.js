const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return tecnology.init(sequelize, DataTypes);
}

class tecnology extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tecnology',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "tecnology_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
