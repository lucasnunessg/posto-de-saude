const MedicosModel = (sequelize, DataTypes) => {
  const Medico = sequelize.define('Medico', {
    medicName: DataTypes.STRING,
  }, {
    tableName: 'Medicos',
    underscored: true,
    timestamps: false,
  });

  Medico.associate = models => {
    Medico.hasMany(models.Paciente, { foreignKey: 'medic_id' });
  };

  return Medico;
};

module.exports = MedicosModel;
