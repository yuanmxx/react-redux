import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './react-redux';
import { createStore } from './store'
import { reducer } from './reducer'
import App from './App.jsx'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)