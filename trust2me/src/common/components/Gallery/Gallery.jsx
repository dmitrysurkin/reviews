import React, { useMemo } from "react";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import Modal from "../Modal";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Gallery = ({ classes, items, companyName, toggleVisible, initialSlide, ...props }) => {
    const params = {
        spaceBetween: 30,
        loop: items.length > 1 ? true : false,
        autoplay: true,
        navigation: true,
        pagination: { clickable: true },
        scrollbar: { draggable: true },
        initialSlide: initialSlide || 0,
        height: 300,
    };

    const slides = useMemo(
        () =>
            items.map(({ id, url }, index) => (
                <SwiperSlide>
                    <img
                        className={classes.slide}
                        key={url}
                        src={url}
                        alt={`Фотография №${
                            index + 1
                        } компании «‎${companyName}»`}
                    />
                </SwiperSlide>
            )),
        [items, companyName, classes]
    );

    return (
        <Modal
            title="Фотографии"
            width="70%"
            onCancel={toggleVisible}
            {...props}
        >
            <Swiper {...params}>{slides}</Swiper>
        </Modal>
    );
};

export default Gallery;
