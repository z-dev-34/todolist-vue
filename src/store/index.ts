import {
    createStore
} from 'vuex';
import { IState } from '../types/stateStore';

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
        allTodos(state:IState) {
            return state.todos
        },
        doneTodos(state:any) {
            return state.todos.filter((todo:any) => todo.done)
        },
        numberOfDoneTodos(state:any) {
            return state.todos.reduce((initValue:number, todo:any) => {
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