import React from "react";
import Container from "../../../../../common/components/Container";
import About from "./components/About";
import Rating from "./components/Rating";

const Description = ({
    classes,
    logo,
    companyName,
    description,
    photos,
    contacts,
}) => {
    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.container}>
                    <About
                        companyName={companyName}
                        logo={logo}
                        description={description}
                        photos={photos}
                        contacts={contacts}
                    />
                    <Rating />
                </div>
            </Container>
        </div>
    );
};

export default Description;
