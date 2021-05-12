import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import Image from "next/image";
import CButtonBlBorder from "../buttons/CButtonBlBorder";

const useStyles = makeStyles(theme => ({
    entityContainer: {
        width: '100%',
        height: '100%',
        // padding: '2rem',
    },
    imageContainer: {
        position:'relative',
        width: '100%',
        height: '25rem',
    },
    entityDescOneContainer: {
        margin: '1rem 0 0'
    },
    entityDescOne: {
        fontWeight: 'bold',
    },
    entityDescTwoContainer: {
        margin: '0'
    },
    entityDescTwo: {
        fontWeight: 'normal',
    },
    buttonContainer: {
        margin: '1rem 0'
    }
}))

const FeaturedListingItem = ({heading,subheading,imgSrc}) => {



    const classes = useStyles();

    return (
        <Box className={classes.entityContainer}>
            <Box className={classes.imageContainer}>
                <Image priority src={imgSrc} layout={'fill'} objectFit={'cover'}/>
            </Box>
            <Box className={classes.entityDescOneContainer}>
                <Typography gutterBottom variant={'h6'} className={classes.entityDescOne}>
                    {heading}
                </Typography>
            </Box>

            <Box className={classes.entityDescTwoContainer}>
                <Typography variant={'h6'} className={classes.entityDescTwo}>
                    {subheading}
                </Typography>
            </Box>

            <Box className={classes.buttonContainer}>
                <CButtonBlBorder>
                    Read more
                </CButtonBlBorder>
            </Box>

        </Box>
    );
};

export default FeaturedListingItem;