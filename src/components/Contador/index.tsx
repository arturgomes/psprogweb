import Navigation from '../Navegacao';

// Componente Contador
function Contador(): JSX.Element {
  // TODO: Estado para armazenar o valor do contador

  // TODO: Função para incrementar o valor do contador
  

  // TODO: Função para decrementar o valor do contador


  return (
    <>
      <Navigation /> {/* Renderiza o componente de navegação */}
      <div>
        <h1>Contador</h1>
        <p>Valor: {valor}</p>
        <button onClick={/** PREENCHER */}>Incrementar</button>
        <button onClick={/** PREENCHER */}>Decrementar</button>
      </div>
    </>
  );
}

export default Contador;
