import React, { useState, useMemo, useCallback } from "react";
import Item from "./components/Item";
import Gallery from "../../../common/components/Gallery";

const Photos = ({ classes, items, companyName, count }) => {
    const [isModalVisible, setModalViseble] = useState(false);
    const toggleVisibleModal = useCallback(
        () => setModalViseble(!isModalVisible),
        [isModalVisible]
    );

    const [initialSlide, setInitialSlide] = useState(null);
    const onClickSlide = useCallback(
        (index) => {
            setInitialSlide(index);
            toggleVisibleModal();
        },
        [toggleVisibleModal]
    );
    console.log(initialSlide);

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
                        onClick={() => onClickSlide(index)}
                        restCount={items.length - (count - 1)}
                        isLast={index === count - 1}
                    />
                )),
        [items, companyName, count, onClickSlide]
    );
    return (
        <div className={classes.wrapper}>
            {markup}
            {isModalVisible && (
                <Gallery
                    visible={isModalVisible}
                    toggleVisible={toggleVisibleModal}
                    items={items}
                    companyName={companyName}
                    initialSlide={initialSlide}
                />
            )}
        </div>
    );
};

export default Photos;
