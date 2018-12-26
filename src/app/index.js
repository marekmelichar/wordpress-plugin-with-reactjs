import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import ReduxThunk from 'redux-thunk';

import App from './containers/app';
// import NotSupportedBrowser from './containers/NotSupportedBrowser';

// import reducers from './reducers';

// activate the logging on client
// import { logsToLocalStorage } from './helpers';
// logsToLocalStorage()

// export const store = createStore(reducers, applyMiddleware(promiseMiddleware, ReduxThunk));
// export const store = createStore(reducers, applyMiddleware(promiseMiddleware));
// export const store = createStore(reducers);

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
    <App />,
    document.getElementById('root')
);
