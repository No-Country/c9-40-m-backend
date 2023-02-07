const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return jobs_rol.init(sequelize, DataTypes);
}

class jobs_rol extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'rol',
        key: 'id'
      }
    },
    jobs_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jobs',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'jobs_rol',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jobs_rol_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
