import React, { useMemo } from "react";
import Item from "./components/Item";

const Photos = ({ classes, items, companyName, count }) => {
    const markup = useMemo(
        () =>
            items
                .slice(0, count)
                .map(({ url, id }, index) => (
                    <Item
                        key={id}
                        url={url}
                        companyName={companyName}
                        index={index}
                    />
                )),
        [items, companyName, count]
    );
    return <div className={classes.wrapper}>{markup}</div>;
};

export default Photos;
