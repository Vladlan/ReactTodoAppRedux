var redux = require("redux");
//Teaches redux to working with actions which returning objects and functions
var thunk = require('redux-thunk').default;

var {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index')

export var configure = () => {
    var reducer = redux.combineReducers({
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map: mapReducer
    });

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => {return f}
    ));
    return store;
}
//