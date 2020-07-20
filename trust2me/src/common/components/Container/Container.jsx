import React from 'react';

const Container = ({ classes, children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export default Container;