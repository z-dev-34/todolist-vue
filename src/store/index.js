import {
    createStore
} from 'vuex';

export default createStore({
    state: {
        todos: [{
                id: 1,
                title: 'eererer',
                done: true
            },
            {
                id: 2,
                title: 'fdfdfdfdf',
                done: false
            }
        ]
    },
    getters: {
        allTodos(state) {
            return state.todos
        },
        doneTodos(state) {
            return state.todos.filter(todo => todo.done)
        },
        numberOfDoneTodos(state) {
            return state.todos.reduce((initValue, todo) => {
                if (todo.done) {
                    initValue++
                }
                return initValue;
            }, 0)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})