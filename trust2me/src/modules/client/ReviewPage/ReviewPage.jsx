import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Advantages from "./components/Advantages";
import Description from "./components/Description";

import useTitle from '../../../common/hooks/useTitle';

import data from "./data";

const ReviewPage = () => {
    useTitle(`Отзывы о компании «‎${data.companyName}»`);

    return (
        <>
            <Header />
            <Image image={data.image} companyName={data.companyName} />
            <Advantages
                items={data.advantages.items}
                bgColorItem={data.advantages.colorItem}
                bgColorList={data.advantages.colorList}
            />
            <Description
                companyName={data.companyName}
                logo={data.logo}
                description={data.description}
                photos={data.photos}
                mark={data.mark}
                countOfReviews={data.countOfReviews}
            />
        </>
    );
};

export default ReviewPage;
