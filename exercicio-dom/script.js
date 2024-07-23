// Criar título simples com id 'titulo'
const titulo = document.createElement('h1');
titulo.id = 'titulo';
titulo.innerText = 'Loja de Produtos';
document.body.appendChild(titulo);

const produto = document.createElement('div');
produto.className = 'produto';

const nomeProduto = document.createElement('h2');
nomeProduto.innerText = 'Smartphone X';

const descricaoProduto = document.createElement('p');
descricaoProduto.innerText = 'Um smartphone de alta qualidade com câmera de 12MP e processador rápido.';

const precoProduto = document.createElement('p');
precoProduto.innerText = 'R$ 2.500,00';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'https://via.placeholder.com/150';
imagemProduto.alt = 'Imagem do Smartphone X';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

document.body.appendChild(produto);