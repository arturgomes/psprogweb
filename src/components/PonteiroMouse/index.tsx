import React, { useEffect } from 'react';
import Navigation from '../Navegacao';
const ZERO = { x: 0, y: 0 }
export const MouseTracker: React.FC = () => {
  // Estado para armazenar a posição do mouse
  // TODO: criar viarável de estado mousePosition e definir inicial com a constante ZERO

  useEffect(() => {
    // Função para lidar com o movimento do mouse
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      //TODO: definir posiçao do mouse para { x: clientX, y: clientY }
    };

    // Adiciona um event listener para o movimento do mouse
    document.addEventListener('mousemove', handleMouseMove);

    // Função de limpeza que remove o event listener quando o componente é desmontado
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Estilo do quadrado
  const squareStyle = {
    width: '120px',
    height: '120px',
    border: '1px solid black',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <>
      <Navigation /> {/* Renderiza o componente de navegação */}
      <div style={/**adicionar estilo */}>
        <p>Coordenadas X: {/** adicionar coordenada */}</p>
        <p>Coordenadas Y: {/** adicionar coordenada */}</p>
      </div>
    </>
  );
};

export default MouseTracker;
