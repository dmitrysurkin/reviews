import React from "react";

const Head = ({ classes, companyName, logo }) => {
    return (
        <div className={classes.wrapper}>
            <img
                className={classes.logo}
                src={logo}
                alt={`Логотип компании ${companyName}`}
            />
            <div className={classes.title}>{companyName}</div>
        </div>
    );
};

export default Head;
