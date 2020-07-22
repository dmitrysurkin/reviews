import React from "react";
import { num2str } from "../../../../../../../../../common/helpers";
import Stars from '../../../../../../../../../common/components/Stars';

const Head = ({ classes, mark, countOfReviews }) => {
    return (
        <>
            <div className={classes.title}>{mark}</div>
            <div className={classes.subtitle}>
                Оценка основана на {countOfReviews} {num2str(Math.trunc(countOfReviews), ["отзыве", "отзыве", "отзывах",])}
            </div>
            <Stars mark={mark} />
        </>
    );
};

export default Head;
