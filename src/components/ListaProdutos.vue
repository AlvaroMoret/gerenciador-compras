<template>
    <div class = "product-container">
      <h2>Lista de Produtos Cadastrados</h2>
      <ul class="lista-grid" >
        <li class="product-item" v-for="produto in produtos" :key="produto.codigo">
          <div class="info-produto">
            <p><strong>Código:</strong> {{ produto.codigo }}</p>
            <p><strong>Nome:</strong> {{ produto.nome }}</p>
            <p><strong>Descrição:</strong> {{ produto.descricao }}</p>
            <p><strong>Preço:</strong> {{ produto.preco | dinheiro }}</p>
          </div>

          <div class="button-container">
            <button id="excluir" @click="excluirProduto(produto)">Excluir</button>
            <button @click="comprarProduto(produto)">Comprar</button>          
          </div>
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
    margin-top: 20px;
    padding: 20px;
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    height: fit-content;
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
    display: flex;
    justify-content: space-between;
    gap: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }

  .info-produto{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
  }
  
  .info-produto p{
    margin: 0;
    margin-bottom: 10px;
    padding-left: 30px;
    font-size: 30px;
  }

  .imagem {
  max-width: 100%;
  max-height: 100px;
  margin-top: 10px;
  }

  .button-container{
    display: flex;
    justify-content: space-around;
    margin-right: 50px;
    flex-direction: column-reverse;
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
  