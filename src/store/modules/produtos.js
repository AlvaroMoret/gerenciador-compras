export default {
    state: {
        produtos: [
            // {
            //     codigo: 1,
            //     nome: 'Teste',
            //     preco: 100,
            //     descricao: 'apenas um produto para testes',
            // },
            // {
            //     codigo: 2,
            //     nome: 'Teste2',
            //     preco: 300,
            //     descricao: 'apenas um produto para testes 2',
            // },
        ],
    },
    getters: {
        ValorTotal(state) {
            return state.produtos.map(item => item.preco * item.quantidade).reduce((total, subtotal) => total + subtotal, 0)
        }
    },
    mutations: {
        cadastrarProduto(state, payLoad) {
            const todosCamposPreenchidos= Object.values(payLoad).every(
                campo => campo !== null && campo !== ''
            )
            if (todosCamposPreenchidos)
                if (state.produtos == undefined) {
                    state.produtos.push(payLoad);
                } else {
                    const sameCode = t => t.codigo === payLoad.codigo;
                    const reallyNew = state.produtos.filter(sameCode);
                    if (reallyNew == 0) {
                        state.produtos.push(payLoad);
                    }
                }
        },
        removerProduto(state, payLoad) {
            const index = state.produtos.findIndex((item) => item.codigo === payLoad.codigo);

            if (index !== -1) {
                state.produtos.splice(index, 1);
            }
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