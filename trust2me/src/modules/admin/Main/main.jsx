import React from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';

const Main = ({
    classes
}) => {
    
    return (
        <div className={classes.container}>
            <Sidebar />
            <Content />          
        </div>         
    )
}

export default Main;