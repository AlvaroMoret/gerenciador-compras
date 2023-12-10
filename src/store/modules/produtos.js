export default {
    state: {
        produtos: [],
    },
    mutations: {
        cadastrarProduto(state, payLoad) {
            const todosCamposPreenchidos= Object.values(payLoad).every(
                campo => campo !== null && campo !== ''
            )
            if (todosCamposPreenchidos){
                if (state.produtos == undefined) {
                    state.produtos.push(payLoad);
                } else {
                    const sameCode = t => t.codigo === payLoad.codigo;
                    const reallyNew = state.produtos.filter(sameCode);
                    if (reallyNew == 0) {
                        state.produtos.push(payLoad);
                    }
                }
            }else{
                alert('Preencha todos os campos');
            }
        },
        removerProduto(state, payLoad) {
            const index = state.produtos.findIndex((item) => item.codigo === payLoad.codigo);

            if (index !== -1) {
                state.produtos.splice(index, 1);
            }
        },
        setProdutos(state, payLoad){
            state.produtos = payLoad;
        }
    },
    actions: {
        cadastrarProduto(context, payLoad) {
            context.commit('cadastrarProduto', payLoad)
        },
        removerProduto(context, payLoad) {
            context.commit('removerProduto', payLoad)
        }
    }
}