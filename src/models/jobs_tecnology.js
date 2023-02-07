const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return jobs_tecnology.init(sequelize, DataTypes);
}

class jobs_tecnology extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    jobs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jobs',
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
    tableName: 'jobs_tecnology',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_tecnology_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
