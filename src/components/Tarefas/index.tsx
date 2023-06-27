import React, { useState, useEffect } from 'react';
import Navigation from '../Navegacao';

// Definição do tipo Tarefa
type Tarefa = {
  nome: string;
  concluido: boolean;
};

// Componente Tarefas
const Tarefas: React.FC = () => {
  // Estado para armazenar a nova tarefa
  // TODO: criar variavel de estado NovaTarefa do tipo String

  // Estado para armazenar a lista de tarefas
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // TODO: modificar o efeito para que seja executado apenas uma vez ao carregar o componente
  useEffect(() => {
    // TODO: Recupera as tarefas armazenadas no localStorage

    if (storedTarefas) {
      //TODO: Atualiza o estado das tarefas com os dados recuperados
    }
  });

  // Efeito executado sempre que o estado das tarefas é alterado
  useEffect(() => {
    // Armazena as tarefas atualizadas no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  // Função para adicionar uma nova tarefa
  const adicionarTarefa = (): void => {
    if (novaTarefa.trim() === '') return;

    // TODO: Cria um objeto Tarefa com o nome da nova tarefa e estado "concluído" como falso
    

    // TODO: Adiciona a nova tarefa ao estado das tarefas

    // Limpa o campo de nova tarefa
    setNovaTarefa('');
  };

  // Função para marcar uma tarefa como concluída ou não
  const marcarConcluida = (index: number): void => {
    // TODO: Cria uma cópia das tarefas
    
    // TODO: Altera o estado de conclusão da tarefa no índice especificado
    
    // TODO: Atualiza o estado das tarefas com as tarefas modificadas

  };

  return (
    <>
      <Navigation /> {/* Renderiza o componente de navegação */}
      <div>
        <h1>Tarefas</h1>
        <input
          type="text"
          value={novaTarefa}
          onChange={/** adicionar aqui método para adicionar tarefa */}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
        <ul>
          {/* Mapeia cada tarefa para renderizar um item da lista */}
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: tarefa.concluido ? 'line-through' : 'none',
                }}
              >
                {tarefa.nome}
              </span>
              <button onClick={() => marcarConcluida(index)}>
                {tarefa.concluido ? 'Desmarcar' : 'Marcar'} como concluída
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tarefas;
