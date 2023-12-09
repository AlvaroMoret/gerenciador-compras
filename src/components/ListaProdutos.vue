<template>
    <div class = "product-container">
      <h2>Lista de Produtos Cadastrados</h2>
      <ul class="lista-grid" >
        <li class="product-item" v-for="produto in produtos" :key="produto.codigo">
          <strong>Código:</strong> {{ produto.codigo }}<br />
          <strong>Nome:</strong> {{ produto.nome }}<br />
          <strong>Descrição:</strong> {{ produto.descricao }}<br />
          <strong>Preço:</strong> {{ produto.preco | dinheiro }}<br />
          <strong>Foto:</strong>
          <img :src="produto.foto" alt="Foto do Produto" class="imagem" />

          <div class="button-container">
            <button id="excluir" @click="excluirProduto(produto)">Excluir</button>
            <button @click="comprarProduto(produto)">Comprar</button>          
          </div>
          <hr />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    computed:{
        produtos(){
            return this.$store.state.produtos.produtos
        }
    },
    methods:{
        comprarProduto(produto){
            this.$store.dispatch('comprarProduto', produto)
        },
        excluirProduto(produto){
            // Lógica para remover um produto do carrinho
            this.$store.dispatch('removerProduto', produto)
            this.$store.dispatch('removerCarrinhoDireto', produto)
        }
    }
  };
  </script>
  
  <style scoped>
  .product-container{
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
  text-align: center;
  color: #333;
  }

  .lista-grid {
  list-style: none;
  padding: 0;
  color:#333
  }

  .product-item{
     margin-bottom: 20px;
  }

  .imagem {
  max-width: 100%;
  max-height: 100px;
  margin-top: 10px;
  }

  .button-container{
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  }

   button {
  background-color: #007bff;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  }

  button:hover {
  background-color: #0056b3;
  }

  #excluir{
    background-color: rgb(204, 58, 58);
  }

  #excluir:hover{
    background-color: rgb(179, 34, 34);
  }
  </style>
  