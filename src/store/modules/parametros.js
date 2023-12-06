export default{
    state: {
        quantidade: 1,
        preco: 8.99
    },
    mutations:{
        setQuantidade(state, payLoad){
            state.quantidade = payLoad;
        },
        setPreco(state, payLoad){
            state.preco = payLoad;
        }
    }
}