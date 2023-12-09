<template>
    <div class = "cadastro">
      <h2>Cadastro de Produto</h2>
      <form @submit.prevent="cadastrarProduto" class="product-form">

        <div class = "form-group">
          <label for="codigo">Código:</label>
          <input v-model="produto.codigo" type="text" id="codigo" required />
        </div>
        <div class = "form-group">
          <label for="nome">Nome:</label>
          <input v-model="produto.nome" type="text" id="nome" required />
        </div>
        <div class = "form-group">
          <label for="descricao">Descrição:</label>
          <textarea v-model="produto.descricao" id="descricao" required></textarea>
        </div>
        <div class = "form-group">
          <label for="preco">Preço Unitário:</label>
          <input v-model="produto.preco" type="number" step="0.01" id="preco" required />
        </div>
        <div class = "form-group">
          <label  for="foto">Foto do Produto:</label>
          <input @change="handleFotoChange" type="file" id="foto" accept="image/*"  style="display: none" />
          <label for = "foto" class="custom-upload">
            <span> Selecionar arquivo</span>
          </label>
        </div>
        <button class="botao-cadastrar" @click="cadastrarProduto">Cadastrar Produto</button>
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

  .cadastro {
  max-width: 400px;
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
custom-upload:houver{
  background-color: #1060b6;
}

    label {
  font-weight: bold;
  margin-bottom: 5px;
  color: #555;
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
