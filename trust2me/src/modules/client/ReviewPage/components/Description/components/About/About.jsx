import React from "react";
import Head from "./components/Head";
import Text from "../../../../../../../common/components/Text";
import Photos from "../../../../../../../common/components/Photos";

const About = ({
    classes,
    companyName,
    logo,
    description,
    photos,
    contacts,
}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>
                <Head companyName={companyName} logo={logo} />
            </div>
            <div className={classes.item}>
                <Text
                    text={description}
                    length={220}
                />
            </div>
            <div className={classes.item}>
                <Photos
                    items={photos}
                    count={6}
                />
            </div>
        </div>
    );
};

export default About;
