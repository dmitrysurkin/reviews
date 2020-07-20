import React from "react";

const Image = ({ image, classes, companyName }) => {
    return (
        <img
            src={image}
            className={classes.image}
            alt={`Обложка компании ${companyName}`}
        />
    );
};

export default Image;
