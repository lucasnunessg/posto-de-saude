const PacientesModel = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    full_name: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  },{
    timestamps: false,
  });

  return Paciente;
};

module.exports = PacientesModel;