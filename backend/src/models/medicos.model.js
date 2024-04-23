const MedicosModel = (sequelize, DataTypes) => {
  const Medico = sequelize.define('Medico', {
    medicName: DataTypes.STRING,
  }, {
    tableName: 'Medicos',
    underscored: true,
    timestamps: false,
  })

  return Medico;
};

module.exports = MedicosModel;