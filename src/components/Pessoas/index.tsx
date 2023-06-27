import React, { useState, useEffect } from 'react';
import Navigation from '../Navegacao';

// Definição do tipo Pessoa
type Pessoa = {
  nome: string;
  peso: number;
  altura: number;
};

// Componente Pessoas
const Pessoas: React.FC = () => {
  // Estado para armazenar a nova pessoa
  // TODO: definir nome, peso e altura, com valores inicialmente vazio ou zero
  const [novaPessoa, setNovaPessoa] = useState<Pessoa>();

  // TODO: Estado para armazenar a lista de pessoas

  // Transforme o Efeito para ser executado apenas uma vez ao carregar o componente
  useEffect(() => {
    //TODO: Recupera as pessoas armazenadas no localStorage

    if (storedPessoas) {
      // TODO: Atualiza o estado das pessoas com os dados recuperados

    }
  });

  // Efeito executado sempre que o estado das pessoas é alterado
  useEffect(() => {
    // TODO: Armazena as pessoas atualizadas no localStorage
  }, [pessoas]);

  // Função para adicionar uma nova pessoa
  const adicionarPessoa = (): void => {
    if (novaPessoa.nome.trim() === '') return;

    // Adiciona a nova pessoa ao estado das pessoas
    setPessoas([...pessoas, novaPessoa]);
    // Limpa o objeto da nova pessoa
    setNovaPessoa({
      nome: '',
      peso: 0,
      altura: 0,
    });
  };

  // Função para calcular o IMC de uma pessoa
  const calcularIMC = (peso: number, altura: number): number => {
    const alturaMetros = altura / 100;
    return peso / (alturaMetros * alturaMetros);
  };

  // Função para calcular a média de peso das pessoas
  const calcularMedia = (): number => {
    const somaPeso = pessoas.reduce((total, pessoa) => total + pessoa.peso, 0);
    return somaPeso / pessoas.length;
  };

  // Função para excluir uma pessoa da lista
  const excluirPessoa = (index: number): void => {
    const novasPessoas = [...pessoas];
    novasPessoas.splice(index, 1);
    setPessoas(novasPessoas);
  };

  return (
    <>
      <Navigation /> {/* Renderiza o componente de navegação */}
      <div>
        <h1>Pessoas</h1>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={novaPessoa.nome}
            onChange={
              (e) => setNovaPessoa({ ...novaPessoa, nome: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Peso (em kg)"
            value={novaPessoa.peso}
            onChange={
              (e) => setNovaPessoa({ ...novaPessoa, peso: Number(e.target.value) })
            }
          />
          <input
            type="number"
            placeholder="Altura (em cm)"
            value={novaPessoa.altura}
            onChange={(e) =>
              setNovaPessoa({ ...novaPessoa, altura: Number(e.target.value) })
            }
          />
          <button onClick={adicionarPessoa}>Adicionar</button>
        </div>
        <ul>
          {/* Mapeia cada pessoa para renderizar um item da lista */}
          {pessoas.map((pessoa, index) => {
            const imc = calcularIMC(pessoa.peso, pessoa.altura);
            const media = calcularMedia();
            const diferenca = imc - media;
            const porcentagem =
              media !== 0 ? (diferenca / media) * 100 : 0;

            return (
              <li key={index}>
                <span>Nome: PREENCHER}</span>
                <span>Peso: PREENCHER kg</span>
                <span>Altura: PREENCHER cm</span>
                <span>IMC: {imc.toFixed(2)}</span>
                <span>
                  {diferenca > 0
                    ? `Acima da média: ${porcentagem.toFixed(2)}%`
                    : `Abaixo da média: ${Math.abs(porcentagem).toFixed(2)}%`}
                </span>
                <button onClick={/**PREENCHER */}>Excluir</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Pessoas;
