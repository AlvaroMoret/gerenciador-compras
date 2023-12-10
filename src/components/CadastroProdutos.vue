<template>
    <div class = "cadastro">

      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="cadastrar" class="product-form">

        <div class = "form-group">
          <label for="codigo">Código:</label>
          <input v-model="codigo" type="text" id="codigo" required />
        </div>
        <div class = "form-group">
          <label for="nome">Nome:</label>
          <input v-model="nome" type="text" id="nome" required />
        </div>
        <div class = "form-group">
          <label for="descricao">Descrição:</label>
          <textarea v-model="descricao" id="descricao" required></textarea>
        </div>
        <div class = "form-group">
          <label for="preco">Preço Unitário:</label>
          <input v-model="preco" type="number" step="0.01" id="preco" required />
        </div>
        <!-- <div class = "form-group">
          <label  for="foto">Foto do Produto:</label>
          <input type="file" id="foto" accept="image/*"  style="display: none" />
          <label for = "foto" class="custom-upload">
            <span> Selecionar arquivo</span>
          </label>
        </div> -->
        <button class="botao-cadastrar" @click="cadastrar">Cadastrar Produto</button>
      </form>
    </div>
  </template>
  
  <script>

  import { mapActions } from "vuex";

  export default {
    props: {
      value: {
        type: Boolean,
        required: true,
      },
    },
    data(){
      return {
        codigo: "",
        nome: "",
        descricao: "",
        preco: null,
        // foto: "",
      }
    },
    methods: {
      ...mapActions(['cadastrarProduto']),
      cadastrar() {
        const produto = {
          codigo: this.codigo,
          nome: this.nome,
          descricao: this.descricao,
          preco: this.preco,
          // foto: this.foto,
        }

        this.$store.dispatch('cadastrarProduto', produto)
        
      }
    },
  };
  </script>

<style>

  .cadastro {
  width: 550px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   color: #333
}


.product-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.custom-upload{
  display: inline-block;
  padding: 8px;
  background-color: #78a1d4;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-upload  span{
  margin-left: 5px;
  color:#555;
}

input, textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.botao-cadastrar {
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

</style>
