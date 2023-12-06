<template>
    <div>
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="cadastrarProduto">
        <label for="codigo">Código:</label>
        <input v-model="produto.codigo" type="text" id="codigo" required />
  
        <label for="nome">Nome:</label>
        <input v-model="produto.nome" type="text" id="nome" required />
  
        <label for="descricao">Descrição:</label>
        <textarea v-model="produto.descricao" id="descricao" required></textarea>
  
        <label for="preco">Preço Unitário:</label>
        <input v-model="produto.preco" type="number" step="0.01" id="preco" required />
  
        <label for="foto">Foto do Produto:</label>
        <input @change="handleFotoChange" type="file" id="foto" accept="image/*" />
  
        <button @click="cadastrarProduto">Cadastrar Produto</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        produto: {
          codigo: "",
          nome: "",
          descricao: "",
          preco: 0,
          foto: null,
        },
      };
    },
    methods: {
      cadastrarProduto() {
        // Lógica para enviar os dados para o servidor ou realizar outras operações
        this.$emit("produtoCadastrado", this.produto)
        this.produto.codigo = "";
        this.produto.nome = "";
        this.produto.descricao = "";
        this.produto.preco = 0;
      },
      handleFotoChange(event) {
        // Lógica para lidar com a seleção de uma foto
        this.produto.foto = event.target.files[0];
      },
    },
  };
  </script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
