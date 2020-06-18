import { DEFAULT_ECDH_CURVE } from "tls";

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

let nextId = 1;

export const addTodo = text => ({
    type: ADD_TODO,
    item: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

const initialState = [];

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.todo.concat(action.text);
        case TOGGLE_TODO:
            return state.todo.map(
                todo => todo.id === action.id
                    ? { ...todo, done: !todo.done }
                    : todo
            );
        default:
            return state;
    }
}