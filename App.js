import React from 'react';
import { Provider } from 'react-redux'
import App from './src'
import store from './src/store'
// import { saveTodo } from './src/reducers/todos';

// store.dispatch(saveTodo())
export default function() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


