import React, { useMemo } from "react";
import { markToArray } from '../../../common/helpers';
import Star from './components/Star';

const Stars = ({ classes, mark }) => {
    const marks = useMemo(() => (
        markToArray(mark).map((i) => (
            <Star mark={i} />
        ))
    ), [mark]);
    
    return <div className={classes.wrapper}>{marks}</div>;
};

export default Stars;
