import {Route, Switch} from "react-router-dom";
import React from "react";
import Home from '../../component/home/home'
/**
 * @author : Kurt Lupin Orioque
 * @mailto : kurtorioque112@gmail.com
 * @created : 11/10/2021, Monday
 **/

const top = () => {
    return <Switch>
        <Route path="/about" render={() => <Home/>}/>
        <Route path="/users">
            <p>aw</p>
        </Route>
        <Route path="/">
            <p><q></q>q</p>
        </Route>
    </Switch>
}

export default top
