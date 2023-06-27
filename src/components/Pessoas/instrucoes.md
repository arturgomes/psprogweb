
crie um componente para armazenar uma lista de Pessoas {nome:string, peso:int,altura:int}, com um input para cadastrar uma nova pessoa na listagem, bem como listar cada pessoa.
Na listagem, voce deverá exibir os campos altura, peso e IMC, baseado nos valores de entrada, bem como a porcentagem acima ou abaixo da média de todas as pessoas cadastradas.

Adicione também a funcionalidade de excluir pessoas.

Neste exemplo, criamos o tipo Pessoa com as propriedades nome (string), peso (number) e altura (number). O componente Pessoas possui um estado novaPessoa para armazenar os valores do campo de input e um estado pessoas para armazenar a lista de pessoas.

Usamos o useEffect para carregar as pessoas armazenadas no localStorage quando o componente é montado. Também utilizamos outro useEffect para atualizar o localStorage sempre que o estado pessoas é alterado.

A função adicionarPessoa é chamada quando o botão "Adicionar" é clicado e cria uma nova pessoa com base nos valores dos campos de input. Em seguida, adicionamos essa nova pessoa ao estado pessoas e limpamos os campos de input.

A função calcularIMC calcula o Índice de Massa Corporal com base no peso e altura fornecidos.

A função calcularMedia calcula a média dos pesos de todas as pessoas cadastradas.

A função excluirPessoa é responsável por excluir uma pessoa com base no índice fornecido. Ao clicar no botão "Excluir", a função atualiza a lista de pessoas, removendo a pessoa selecionada.