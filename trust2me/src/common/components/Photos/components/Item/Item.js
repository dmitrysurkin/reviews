import React, { useState, useMemo } from "react";

const Item = ({ classes, companyName, url, index }) => {
    const [isButtonShow, setVisibleButton] = useState(false);
    const toggleVisibleButton = useMemo(() => {
        setVisibleButton(!isButtonShow);
    }, [isButtonShow]);

    return (
        <img
            className={classes.item}
            src={url}
            alt={`Фотография №${index} компании "${companyName}"`}
        />
    );
};

export default Item;
