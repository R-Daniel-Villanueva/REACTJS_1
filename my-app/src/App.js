import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { routes } from './routes';
import Formulario from './formulario/formulario';
import rootReducer from './reducers/index';

import {Provider} from 'react-redux';//conexion global con el redux
import{createStore,applyMiddleware, compose} from 'redux';//
import{routerMiddleware} from 'react-router-redux';//detecta el path 
import createHistory from 'history/createBrowserHistory';//cera el historial para las salidad de back
import thunk from 'redux-thunk';//propiedad obligatoria para la creacion del historial
//no lleva llaves por que importa todo el componente, si las lleva es un elemento especifico, si es un componente propio las lleva

const history=createHistory();
const routeMiddleware=routerMiddleware(history);

const composeEnhacers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//si existe la extension en chrome lo pone, si no usa el compose / la usa de manera local
const store = createStore(
  rootReducer,
  composeEnhacers(
    applyMiddleware(thunk,routeMiddleware)//redux se usa para persistir la informacion el action es para solicitar la informacion
  )
);

class App extends Component{
  render(){
    return (
      <Provider store={store} >
        <div>
          <Formulario/>
        </div>
      </Provider>
    );
  }



  /*
  <div>
    {routes}
  </div>
  */



  /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
}

export default App;
