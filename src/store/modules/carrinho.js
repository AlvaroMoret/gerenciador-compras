export default {
    state: {
        produtos: [],
    },
    getters:{
        total(state){
            return state.produtos.map(p => p.quantidade * p.preco)
            .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations:{
        adicionaProduto(state, payLoad /*produto*/){
            state.produtos.push(payLoad);
        }
    },
    actions:{
        adicionaProduto(context, payLoad){
            setTimeout(() =>{
                // tratamento desejado
                context.commit('adicionaProduto',payLoad)
            },0)
        }
    }
}