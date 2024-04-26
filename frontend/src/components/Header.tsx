
function MyHeader() {

  const data = {medic_name: 'Nome do Médico', não_sei: 'Apenas para teste'};
  return (
  <>
  <div>
      <header>{data.medic_name}
    </header>
  </div>
  <div>
    <p>{data.não_sei}</p>
  </div>
    <p>
      {`${data.medic_name} 
      - 
        ${data.não_sei}`}
    </p>
  </>

  );
}

export default MyHeader;
