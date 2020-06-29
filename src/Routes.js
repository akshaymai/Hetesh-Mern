import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from '../src/core/Home'

const Routes = (props) => {
    return (
    <div>

        <BrowserRouter>
            <Switch>
                 <Route exact path="/" component={Home}></Route>
           </Switch>
        </BrowserRouter>
    </div>
    );
}
export default Routes;


 