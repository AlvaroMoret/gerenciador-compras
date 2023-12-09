<template>
    <div class="cart-container">
      <h2>Carrinho de Compras</h2>
        <p>
            Quantidade de Produtos no Carrinho: {{ qtdProdutosCarrinho }}
        </p>
        <p>
            Valor Total: {{ valorTotal | dinheiro }}
        </p>
      <ul class="cart-list">
        <li class="cart-item" v-for="item in carrinho" :key="item.produto.codigo">
            <strong>Produto:</strong> {{ item.produto.nome }}<br />
            <strong>Quantidade:</strong> {{ item.quantidade }}<br />
            <strong>Preco:</strong> {{ item.preco | dinheiro }}<br />

            <button @click="removerDoCarrinho(item.produto)">Remover Item</button>
        <hr />
        </li>
      </ul>
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
        }
    }
  };
  </script>
  
  <style scoped>
.cart-container{
  max-width: 600px;
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

.cart-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

button {
  background-color: #dc3545;
  color: #fff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #c82333;
}
  </style>
  