import React from "react";

const Item = ({ classes, icon, title, description }) => {
    return (
        <div className={classes.wrapper}>
            <svg className={classes.icon}>
                <image xlinkHref={icon} />
            </svg>

            <div>
                <div className={classes.title}>{title}</div>
                <div className={classes.description}>{description}</div>
            </div>
        </div>
    );
};

export default Item;
