export default {
    state: {
        produtosCarrinho: [],
    },
    getters:{
        ValorTotal(state){
            return state.produtosCarrinho.map(item => item.preco * item.quantidade).reduce((total, subtotal) => total + subtotal, 0)
        },
        qtdProdutosCarrinho(state){
            return state.produtosCarrinho.reduce((total, item) => total + item.quantidade, 0)
        }
    },
    mutations:{
        comprarProduto(state, produto){
            const itemExistente = state.produtosCarrinho.find(item => item.produto.codigo === produto.codigo);

            if (itemExistente) {
                itemExistente.quantidade++;
            }else{
                state.produtosCarrinho.push({
                    produto,
                    quantidade: 1,
                    preco: produto.preco,
                })
            }
        },
        removerDoCarrinho(state, payLoad){
            const index = state.produtosCarrinho.findIndex((item) => item.produto.codigo === payLoad.codigo);

            if (index !== -1) {
                if(state.produtosCarrinho[index].quantidade > 1){
                    state.produtosCarrinho[index].quantidade--;
                }else{
                    state.produtosCarrinho.splice(index, 1);
                }
            }
        },
        removerCarrinhoDireto(state, payLoad){
            const index = state.produtosCarrinho.findIndex((item) => item.produto.codigo === payLoad.codigo);

            if (index !== -1) {
                state.produtosCarrinho.splice(index, 1);
            }
        },
        setCarrinho(state, payLoad){
            state.produtosCarrinho = payLoad;
        }
    },
    actions:{
        comprarProduto(context, payLoad){
            context.commit('comprarProduto',payLoad)
        },
        removerDoCarrinho(context, payLoad){
            context.commit('removerDoCarrinho', payLoad)
        },
        removerCarrinhoDireto(context, payLoad){
            context.commit('removerCarrinhoDireto', payLoad)
        }
    }
}