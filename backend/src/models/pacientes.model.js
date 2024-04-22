const PacientesModel = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  },{
    timestamps: false,
    underscored: true,
    tableName: 'Pacientes'
  });

  return Paciente;
};

module.exports = PacientesModel;