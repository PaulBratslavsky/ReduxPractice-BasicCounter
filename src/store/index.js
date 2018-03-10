import { createStore } from 'redux';

// ONE TIME DEAL - SETTING THE INITIAL STATE OBVIUOOOOSLY
const initialState = {
    count: 666
};

 const reducer = (state = initialState, action) => {
    console.log('hello from reducer', action);
    
    switch (action.type) {
        case 'INCREMENT':
            return Object.assign({}, state, { count: state.count + 1 });
        default:
            return state;
    } 
 }

 const store = createStore(reducer);

 export default store;