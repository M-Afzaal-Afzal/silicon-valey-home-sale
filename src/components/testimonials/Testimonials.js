import React from 'react';
import {Box, Container, makeStyles} from "@material-ui/core";

import {Swiper, SwiperSlide} from "swiper/react";

import SwiperCore, {
    Navigation
} from 'swiper/core';

import "swiper/components/navigation/navigation.min.css"
import Testimonial from "./Testimonial";
import TextWithDivider from "../Common/TextWithDivider";

const useStyles = makeStyles((theme) => ({
    testimonials: {
        margin: '2rem auto 4.5rem'
    },
    swiperSlide: {
        width: '70%',
        background: '#2f2f2f',
        padding: '2rem',
        paddingTop: '6rem',
    },
    textWithDividerContainer: {
        marginBottom: '4rem',
    }
}))

SwiperCore.use([Navigation]);

const Testimonials = () => {

    const classes = useStyles();

    const testimonialItems = [
        {
            testimonialText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio dolores
                    eaque facilis hic ipsa ipsum nam placeat reiciendis tenetur? Cumque, dicta ducimus ea
                    eligendi modi nam quod rem tempora?`,
            author: 'Ryan S.',
            role: ' CEO of YTG',
        }, {
            testimonialText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio dolores
                    eaque facilis hic ipsa ipsum nam placeat reiciendis tenetur? Cumque, dicta ducimus ea
                    eligendi modi nam quod rem tempora?`,
            author: 'Ryan S.',
            role: ' CEO of YTG',
        }, {
            testimonialText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio dolores
                    eaque facilis hic ipsa ipsum nam placeat reiciendis tenetur? Cumque, dicta ducimus ea
                    eligendi modi nam quod rem tempora?`,
            author: 'Ryan S.',
            role: ' CEO of YTG',
        }, {
            testimonialText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci distinctio dolores
                    eaque facilis hic ipsa ipsum nam placeat reiciendis tenetur? Cumque, dicta ducimus ea
                    eligendi modi nam quod rem tempora?`,
            author: 'Ryan S.',
            role: ' CEO of YTG',
        },
    ]

    return (
        <Container maxWidth={'lg'} className={classes.testimonials}>
            <Box className={classes.textWithDividerContainer}>
                <TextWithDivider>
                    Testimonials
                </TextWithDivider>
            </Box>

            <Swiper slidesPerView={'auto'}
                    spaceBetween={50}
                    navigation={true}
                    className="mySwiper"
            >
                {
                    testimonialItems.map(({testimonialText, author, role},index) => (
                        <SwiperSlide key={index} className={classes.swiperSlide}>
                            <Testimonial
                                testimonialText={testimonialText}
                                author={author}
                                role={role}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </Container>
    );
};

export default Testimonials;