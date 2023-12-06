<template>
    <div>
      <h2>Lista de Produtos Cadastrados</h2>
      <ul>
        <li v-for="produto in produtos" :key="produto.codigo">
          <strong>Código:</strong> {{ produto.codigo }}<br />
          <strong>Nome:</strong> {{ produto.nome }}<br />
          <strong>Descrição:</strong> {{ produto.descricao }}<br />
          <strong>Preço:</strong> {{ produto.preco | formatPreco }}<br />
          <strong>Foto:</strong>
          <img :src="produto.foto" alt="Foto do Produto" style="max-width: 100px; max-height: 100px;" />

          <button @click="comprarProduto(produto)">Comprar</button>
          
          <button @click="excluirProduto(produto)">Excluir</button>

          <hr />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      produtos: {
        type: Array,
        default: () => [],
      },
    },
    filters: {
      formatPreco(value) {
        // Lógica para formatar o preço conforme necessário
        return `R$ ${parseFloat(value).toFixed(2)}`.replace('.', ',');
      },
    },
    methods:{
        comprarProduto(produto){
            // Lógica para comprar um produto
            this.$emit("produtoComprado", produto)
        },
        excluirProduto(produto){
            // Lógica para excluir um produto
            this.$emit("produtoExcluido", produto)
        }
    }
  };
  </script>
  
  <style scoped>
  /* Adicione estilos conforme necessário */
  </style>
  