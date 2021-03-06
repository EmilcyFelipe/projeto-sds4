import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from 'pages/Home/index'
import Dashboard from 'pages/Dashboard';

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/dashboard' component={Dashboard}/>
        </Switch>
        </BrowserRouter>
    );
}