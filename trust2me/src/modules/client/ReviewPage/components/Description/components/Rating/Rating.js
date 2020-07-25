import React from "react";
import Head from "./components/Head";

const Rating = ({ classes, mark, countOfReviews }) => {
    return (
        <div className={classes.wrapper}>
            <Head mark={mark} countOfReviews={countOfReviews} />
        </div>
    );
};

export default Rating;
