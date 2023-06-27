import React, { useState } from 'react';

const SeletorDeCores: React.FC = () => {
  // Estados para armazenar os valores das cores vermelho, verde e azul
  const [vermelho, setVermelho] = useState('0');
  const [verde, setVerde] = useState('0');
  const [azul, setAzul] = useState('0');

  // Funções para lidar com as alterações nos inputs de vermelho, verde e azul
  const handleChangeVermelho = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVermelho(event.target.value);
  };

  const handleChangeVerde = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVerde(event.target.value);
  };

  const handleChangeAzul = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAzul(event.target.value);
  };

  // Função para converter valores RGB para formato hexadecimal
  const rgbParaHex = (r: number, g: number, b: number): string => {
    const vermelhoHex = r.toString(16).padStart(2, '0');
    const verdeHex = g.toString(16).padStart(2, '0');
    const azulHex = b.toString(16).padStart(2, '0');
    return `#${vermelhoHex}${verdeHex}${azulHex}`;
  };

  // Converte os valores das cores para formato hexadecimal
  const corHex = rgbParaHex(Number(vermelho), Number(verde), Number(azul));

  return (
    <>
      <Navigation /> {/* Renderiza o componente de navegação */}
      <div>
        <h1>Seletor de Cores</h1>
        <div>
          <label htmlFor="redInput">Vermelho:</label>
          <input
            id="redInput"
            type="number"
            min="0"
            max="255"
            value={vermelho}
            onChange={/** adicionar cor */}
          />
        </div>
        <div>
          <label htmlFor="greenInput">Verde:</label>
          <input
            id="greenInput"
            type="number"
            min="0"
            max="255"
            value={verde}
            onChange={/** adicionar cor */}
          />
        </div>
        <div>
          <label htmlFor="blueInput">Azul:</label>
          <input
            id="blueInput"
            type="number"
            min="0"
            max="255"
            value={azul}
            onChange={/** adicionar cor */}
          />
        </div>
        <div
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: corHex,
            margin: '10px',
          }}
        >
          <p style={{ textAlign: 'center', paddingTop: '80px' }}>{`RGB: ${vermelho}, ${verde}, ${azul}`}</p>
        </div>
      </div>
    </>
  );
};

export default SeletorDeCores;
