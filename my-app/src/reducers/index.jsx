import {combineReducers} from 'redux';
import {reducerFormulario} from './reducer-formulario';
//combina todos los reducers  y los combina en uno solo
export default combineReducers ({//por cada componente que exista hay un action y un reducer
    reducerFormulario
});