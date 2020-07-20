import React from "react";
import {Switch, Route} from 'react-router-dom';
import Client from "./modules/client";
import Admin from "./modules/admin";
import styles from "./styles.js";
import withStyle from "react-jss";
import style from './App.css';

const App = () => {
    return (
        <Switch>
            <Route path='/users' component={Client} />
            <Route path='/admin' component={Admin} />
        </Switch>
    )
};
//TODO: импорт компонентов

export default withStyle(styles)(App);
