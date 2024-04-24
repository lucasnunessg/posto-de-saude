import React, { useEffect, useState } from 'react';

interface Medico {
  id: number;
  nome: string;
}

const FormularioMedico: React.FC = () => {
  const [medicos, setMedicos] = useState<Medico[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/medicos/')
      .then(response => response.json())
      .then((data: Medico[]) => setMedicos(data))
      .catch(error => console.error('Erro ao obter médicos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Médicos</h1>
      <ul>
        {medicos.map(medico => (
          <li key={medico.id}>{medico.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default FormularioMedico;
