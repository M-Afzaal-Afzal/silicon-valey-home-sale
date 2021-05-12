import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";
import Image from 'next/image'
import CButtonWBorder from "../buttons/CButtonWBorder";

const useStyles = makeStyles(theme => ({
    HeroContainer: {
        width: '100%',
        height: '40rem',
        position: 'relative',
    },
    contentContainer: {
        position: "relative",
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    heroHeadingContainer: {
        maxWidth: '45rem',
    },
    heroHeading: {
        textAlign: 'center',
        color: 'white',
        fontSize: '2.5rem',
        fontWeight: 'bold',
    },
    heroSubHeadingContainer: {
        maxWidth: '30rem',
        marginTop: '4rem',
    },
    heroSubHeading: {
        textTransform: "uppercase",
        textAlign: 'center',
        fontSize: '1.5rem',
        color:'white',
        fontWeight: 'normal',
    },
    CButtonContainer: {
        marginTop: '2rem',
    },

    // CButton: {},

    backgroundOverlay: {
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.7)',
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 5,
    },

}))

const Hero = () => {

    const classes = useStyles();

    return (
        <div className={classes.HeroContainer}>
            <Image
                priority
                src={'/images/Hero/hero-min.jpg'}
                layout={'fill'}
                objectFit={'cover'}
            />
            <div className={classes.backgroundOverlay}/>
            <div className={classes.contentContainer}>

                {/* main heading */}
                <div className={classes.heroHeadingContainer}>
                    <Typography variant={'h1'} className={classes.heroHeading}>
                        SILICON VALLEY COMMERCIAL REAL ESTATE
                    </Typography>
                </div>

            {/*    sub-heading */}
                <div className={classes.heroSubHeadingContainer}>
                    <Typography variant={'h2'} className={classes.heroSubHeading}>
                        Over $20B in real estate sales
                    </Typography>
                </div>

            {/*    Hero Button*/}
                <div className={classes.CButtonContainer}>
                    <CButtonWBorder>
                        VIEW HOMES
                    </CButtonWBorder>
                </div>
            </div>

        </div>
    );
};

export default Hero;