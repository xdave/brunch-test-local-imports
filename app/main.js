import m from 'mithril';
import {createStore} from 'redux';
import Hello from './components/Hello';

const store = createStore((state = {}, action) => {
    switch (action.type) {
        case 'SET_HELLO_MESSAGE': {
            const {message} = action;
            return { ...state, message };
        }
        default:
            return state;
    }
});

store.dispatch({
    type: 'SET_HELLO_MESSAGE',
    message: 'World'
});

document.addEventListener('DOMContentLoaded', (event) => {
    m.mount(document.querySelector('.app'), <Hello {...store} />);
});
