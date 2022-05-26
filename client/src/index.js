import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./autofarm/UserStore";
import TokenStore from './autofarm/TokenStore';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        token: new TokenStore()
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);