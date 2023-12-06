<template>
    <div>
      <h2>Carrinho de Compras</h2>
        <p>
            Quantidade de Produtos no Carrinho: {{ qtdProdutosCarrinho }}
        </p>
        <p>
            Valor Total: {{ valorTotal | formatPreco }}
        </p>
      <ul>
        <li v-for="item in carrinho" :key="item.produto.codigo">
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
  /* Adicione estilos conforme necessário */
  </style>
  