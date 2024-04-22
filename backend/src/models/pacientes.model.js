const PacientesModel = (sequelize, DataTypes) => {
  const Paciente = sequelize.define('Paciente', {
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    contact: DataTypes.STRING,
  },{
    timestamps: false,
    undescored: true,
  });

  return Paciente;
};

module.exports = PacientesModel;