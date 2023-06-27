# Questao 5
Crie um componente em typescrypt react, que mostra no ponteiro do mouse as coordenadas x e y dentro de um quadrado de 800x600 desenhado no centro da tela.

Neste exemplo, utilizamos o hook useState para armazenar a posição do mouse nas coordenadas X e Y. O hook useEffect é utilizado para adicionar um evento de escuta ao movimento do mouse e atualizar as coordenadas do mouse sempre que ocorrer um evento de movimento.

Dentro do elemento div, definimos o estilo do quadrado com as dimensões de 800x600 e o posicionamos no centro da tela usando a propriedade transform. As coordenadas X e Y do mouse são exibidas dentro do quadrado.