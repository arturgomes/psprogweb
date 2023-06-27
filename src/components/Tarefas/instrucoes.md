
2. crie um componente tarefas que terá um tipo Tarefas como {nome:string, concluido:boolean}, com um pequeno input e botao de criaçao de novas tarefas, e logo abaixo, uma listagem das tarefas, cada uma com um botão ao lado para marcar como concluída ou não. 
armazene essa lista de tarefas tanto num useState quanto no localstorage

Neste exemplo, criamos o tipo Tarefa com as propriedades nome (string) e concluido (boolean). Em seguida, definimos o componente Tarefas que contém um estado novaTarefa para armazenar o valor do campo de input, e um estado tarefas para armazenar a lista de tarefas.

Usamos o useEffect para carregar as tarefas armazenadas no localStorage no momento em que o componente é montado. Também utilizamos outro useEffect para atualizar o localStorage sempre que o estado tarefas é alterado.

A função adicionarTarefa é chamada quando o botão "Adicionar" é clicado e cria uma nova tarefa com base no valor do campo de input. Em seguida, adicionamos essa nova tarefa ao estado tarefas e limpamos o campo de input.

A função marcarConcluida é responsável por alterar o status de conclusão de uma tarefa com base no índice fornecido. Ao clicar no botão "Marcar como concluída", a função atualiza