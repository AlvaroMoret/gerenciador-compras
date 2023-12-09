  <template>
    <div id="app">
      <!-- Seu componente de cadastro de produtos -->
      <CadastroProdutos @produtoCadastrado="adicionarProduto" />

      <!-- Componente ListaProdutos exibindo a lista de produtos -->
      <ListaProdutos :produtos="listaProdutos" @produtoComprado="adicionarAoCarrinho" @produtoExcluido="excluirProduto" />

      <!-- Componente CarrinhoCompras exibindo o carrinho de compras -->
      <CarrinhoCompras :carrinho="carrinho" @produtoRemovido="removerDoCarrinho"/>
    </div>
  </template>

  <script>
    import CadastroProdutos from './components/CadastroProdutos.vue'
    import ListaProdutos from './components/ListaProdutos.vue'
    import CarrinhoCompras from './components/CarrinhoCompras.vue'

    export default {
      name: 'App',
      components: { CadastroProdutos, ListaProdutos, CarrinhoCompras },
    }
  </script>

  <style>
    * {
      font-family: 'Oswald', sans-serif;
    }

    body {
      font-size: 2rem;
      background: linear-gradient(to right, rgb(0, 0, 0), rgb(67, 67, 67));
    }

    #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #FFF;
    }

    h1 {
      font-weight: 200;
    }

    .linha {
      display: flex;
    }

    button {
      font-size: 1.8rem;
      padding: 5px 15px;
      border-radius: 5px;
      color: #222;
      background-color: #FAFAFA;
      outline: none;
      border: none;
    }
</style>
