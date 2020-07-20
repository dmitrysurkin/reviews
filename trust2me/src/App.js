import React from "react";
import Client from "./modules/client";
import styles from "./styles.js";
import withStyle from "react-jss";
import style from './App.css';

const App = () => {
    return <Client />;
};

//TODO: алиасы + импорт компонентов

export default withStyle(styles)(App);
