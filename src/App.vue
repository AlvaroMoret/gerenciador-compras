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
      data() {
        return {
          listaProdutos: [],
          carrinho: [],
        }
      },
      methods: {
        adicionarProduto(produto) {
          this.listaProdutos.push(produto)
        },

        adicionarAoCarrinho(produto) {
          const itemExistente = this.carrinho.find(item => item.produto.codigo === produto.codigo);

          if (itemExistente) {
            itemExistente.quantidade++;
          }else{
            this.carrinho.push({
              produto,
              quantidade: 1,
              subtotal: produto.preco,
            });
          }
          
        },

        excluirProduto(produto) {
          // Lógica para excluir um produto da lista de disponíveis
          const index = this.listaProdutos.findIndex((p) => p.codigo === produto.codigo);

          if (index !== -1) {
            this.listaProdutos.splice(index, 1);
          }

          // Lógica para excluir o produto do carrinho, se estiver presente
          this.removerDoCarrinho(produto);
        },

        removerDoCarrinho(produto) {
          // Lógica para remover um produto do carrinho
          const index = this.carrinho.findIndex((item) => item.produto.codigo === produto.codigo);

          if (index !== -1) {
            this.carrinho.splice(index, 1);
          }
        }
      }
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
