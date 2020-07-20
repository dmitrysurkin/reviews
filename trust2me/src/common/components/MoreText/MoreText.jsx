import React from "react";

const MoreText = ({ classes, isTextVisible, onClick }) => {
    return (
        <span className={classes.link} onClick={onClick}>
            {isTextVisible ? "Свернуть" : "Читать дальше"}
        </span>
    );
};

export default MoreText;
