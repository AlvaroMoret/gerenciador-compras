  <template>
    <div id="app">

      <div class="esquerda">
        <!-- Seu componente de cadastro de produtos -->
        <CadastroProdutos/>
        
        <!-- Componente CarrinhoCompras exibindo o carrinho de compras -->
        <CarrinhoCompras/>
      </div>

      
      <!-- Componente ListaProdutos exibindo a lista de produtos -->
      <ListaProdutos />
      
        

    </div>
  </template>

  <script>

    import CadastroProdutos from './components/CadastroProdutos.vue'
    import ListaProdutos from './components/ListaProdutos.vue'
    import CarrinhoCompras from './components/CarrinhoCompras.vue'

    export default {
      name: 'App',
      components: { CadastroProdutos, ListaProdutos, CarrinhoCompras },
      watch: {
        $store: {
          deep: true,
          handler() {
            localStorage.setItem('produtos', JSON.stringify(this.$store.state.produtos.produtos))
            localStorage.setItem('carrinho', JSON.stringify(this.$store.state.carrinho.produtosCarrinho))
          }
        }
      },
      created(){
        this.$store.commit('setProdutos', (JSON.parse(localStorage.getItem('produtos')) || []))
        this.$store.commit('setCarrinho', (JSON.parse(localStorage.getItem('carrinho')) || []))
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
      display: flex;
      justify-content: space-around
    }

    h1 {
      font-weight: 200;
    }

    .linha {
      width: 306px;
      display: flex;
      flex-direction: column;
      align-items: center;
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

    .escolha {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 15px;
        width: 40px;
        border-radius: 20px;
        border: 1px solid #AAA;
    }

    .botao {
        position: absolute;
        margin: 0px 20px;
        height: 25px;
        width: 25px;
        border-radius: 14px;
        background: #FFF;
        box-shadow: 0px 0px 5px #000B;
    }

    .desligado {
        background-color: #AAA;
    }

    .ligado {
        background-color: #7495c2;
    }

    .desligado .botao {
        left: -25px;
    }

    .ligado .botao {
        background-color: #255ca9;
        align-self: flex-end;
    }


</style>
