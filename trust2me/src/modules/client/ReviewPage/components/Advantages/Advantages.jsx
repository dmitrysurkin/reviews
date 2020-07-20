import React, { useMemo } from "react";
import Item from "./components/Item";
import Container from '../../../../../common/components/Container';

const Advantages = ({ classes, items, bgColorItem }) => {
    const markup = useMemo(
        () =>
            items.map(({ icon, title, description, id }) => (
                <Item
                    key={id}
                    icon={icon}
                    title={title}
                    description={description}
                    bgColor={bgColorItem}
                />
            )),
        [items, bgColorItem]
    );

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.list}>
                    {markup}
                </div>
            </Container>
        </div>
    );
};

export default Advantages;
