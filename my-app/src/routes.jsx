
import React from 'react';

import {
   BrowserRouter, Route, Switch

} from 'react-router-dom';

import { Hello } from './hello_world/hello_world';
import { clock } from './clock/clock';
import { Formulario } from './formulario/formulario';

export const routes = (
   <BrowserRouter>
    <Switch>
        <Route exact key="hello" path="/hello" component={Hello}/>
        <Route key="clock" path="/clock" component={clock}/>
        <Route key="formulario" path="/formulario" component={Formulario}/>
    </Switch>
   </BrowserRouter>
);
