<template>
    <div class="cart-container">
      <h2>Carrinho de Compras</h2>
        <p>
            Quantidade de Produtos no Carrinho: {{ qtdProdutosCarrinho }}
        </p>
        <p>
            Valor Total: {{ valorTotal | formatPreco }}
        </p>
      <ul class="cart-list">
        <li class="cart-item" v-for="item in carrinho" :key="item.produto.codigo">
            <strong>Produto:</strong> {{ item.produto.nome }}<br />
            <strong>Quantidade:</strong> {{ item.quantidade }}<br />
            <strong>Subtotal:</strong> {{ item.subtotal | formatPreco }}<br />

            <button @click="removerDoCarrinho(item.produto)">Remover Item</button>
        <hr />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      carrinho: {
        type: Array,
        default: () => [],
      },
    },
    computed:{
        qtdProdutosCarrinho(){
            // Lógica para calcular a quantidade de produtos no carrinho
            return this.carrinho.reduce((total, item) => total + item.quantidade, 0)
        },
        valorTotal(){
            // Lógica para calcular o valor total do carrinho
            return this.carrinho.reduce((total, item) => total + item.subtotal, 0)
        }
    },
    filters: {
      formatPreco(value) {
        // Lógica para formatar o preço conforme necessário
        return `R$ ${parseFloat(value).toFixed(2)}`.replace('.', ',');
      },
    },
    methods:{
        removerDoCarrinho(produto){
            // Lógica para remover um produto do carrinho
            this.$emit("produtoRemovido", produto)
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
  