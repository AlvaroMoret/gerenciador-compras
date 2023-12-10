<template>
    <div class="cart-container">
      <h2>Carrinho de Compras</h2>
      <ul class="cart-list">
        <li class="cart-item" v-for="item in carrinho" :key="item.produto.codigo">
          <p><strong>Produto:</strong> {{ item.produto.nome }}</p>
          <p><strong>Preco:</strong> {{ item.preco | dinheiro }}</p>
          <p><strong>Quantidade:</strong> {{ item.quantidade }}
            
            <button @click="removerDoCarrinho(item.produto)">-</button>
            <button class="mais" @click="adicionarAoCarrinho(item.produto)">+</button></p>
          </li>
        </ul>
        
        <div class="info">
          <p>Produtos no Carrinho: {{ qtdProdutosCarrinho }}</p>
          <p>Valor Total: {{ valorTotal | dinheiro }}</p>
        </div>

    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    computed:{
      ...mapGetters({
        qtdProdutosCarrinho: "qtdProdutosCarrinho",
        valorTotal: "ValorTotal",
      }),
        carrinho(){
            // Lógica para pegar o carrinho de compras
            return this.$store.state.carrinho.produtosCarrinho
        },
    },
    methods:{
        ...mapActions(['removerDoCarrinho']),
        removerDoCarrinho(produto){
            // Lógica para remover um produto do carrinho
            this.$store.dispatch('removerDoCarrinho', produto)
        },
        adicionarAoCarrinho(produto){
          this.$store.dispatch('comprarProduto', produto)
        }
    }
  };
  </script>
  
  <style scoped>
.cart-container{
  width: 550px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   color: #333
}
.cart-list{
  list-style: none;
  padding: 0;
}

.info{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.cart-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cart-item p, .info p{
  margin: 0;
  margin-bottom: 20px;
}

button {
  background-color: #dc3545;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 44px;
  margin-right: 10px;
}

button.mais{
  background-color: #007bff;
}

button:hover {
  background-color: #c82333;
}
  </style>
  