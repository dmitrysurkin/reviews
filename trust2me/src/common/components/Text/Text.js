import React, { useMemo, useState, useCallback } from "react";
import { getCutText } from "../../helpers";
import MoreText from "../MoreText";

const Text = ({ classes, text, length }) => {
    const [isTextVisible, setTextVisible] = useState(false);
    const toggleIsTextVisible = useCallback(
        () => setTextVisible(!isTextVisible),
        [isTextVisible]
    );

    const cutText = useMemo(() => getCutText(text, length), [text, length]);

    return (
        <div className={classes.text}>
            {isTextVisible ? text : cutText}
            <MoreText
                isTextVisible={isTextVisible}
                onClick={toggleIsTextVisible}
            />
        </div>
    );
};

export default Text;
