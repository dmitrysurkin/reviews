import React, { useState, useCallback } from "react";
import { EyeOutlined } from "@ant-design/icons";
import { Transition } from "react-spring/renderprops";

const Item = ({ classes, companyName, url, index, onClick, isLast, restCount }) => {
    const [isButtonShow, setVisibleButton] = useState(false);
    const toggleVisibleButton = useCallback(
        () => setVisibleButton(!isButtonShow),
        [isButtonShow]
    );

    return (
        <div
            className={classes.wrapper}
            onMouseEnter={toggleVisibleButton}
            onMouseLeave={toggleVisibleButton}
            onFocus={toggleVisibleButton}
            onBlur={toggleVisibleButton}
            onClick={onClick}
        >
            <img
                className={classes.item}
                src={url}
                alt={`Фотография №${index} компании "${companyName}"`}
            />
            {isLast ? (
                <div className={classes.more}>+{restCount}</div>
            ) : (
                <Transition
                    items={isButtonShow}
                    from={{ opacity: 0 }}
                    enter={{ opacity: 1 }}
                    leave={{ opacity: 0 }}
                >
                    {(show) =>
                        show &&
                        ((props) => (
                            <div className={classes.more} style={props}>
                                <Transition
                                    items={isButtonShow}
                                    from={{
                                        opacity: 0,
                                        transform: "translate3d(0,-20px,0)",
                                    }}
                                    enter={{
                                        opacity: 1,
                                        transform: "translate3d(0,0,0)",
                                    }}
                                    leave={{
                                        opacity: 0,
                                        transform: "translate3d(0,-20px,0)",
                                    }}
                                >
                                    {(show) =>
                                        show &&
                                        ((props) => (
                                            <EyeOutlined style={props} />
                                        ))
                                    }
                                </Transition>
                            </div>
                        ))
                    }
                </Transition>
            )}
        </div>
    );
};

export default Item;
