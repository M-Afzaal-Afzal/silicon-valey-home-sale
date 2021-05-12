import React from 'react';
import {Box, Container, makeStyles, Typography} from "@material-ui/core";
import TextWithDivider from "../Common/TextWithDivider";
import Image from 'next/image';
import CButtonBlBorder from "../buttons/CButtonBlBorder";

const useStyles = makeStyles(theme => ({
    meetVsReality: {
        margin: '4rem 1rem',
    },
    textWithDividerContainer: {
        marginBottom: '4.5rem',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: "30rem",
    },
    descriptionContainer: {
        padding: '3rem',
        paddingBottom: '1.5rem',
    },
    buttonContainer: {
        padding: '3rem',
        paddingTop: 0,
    },
    mvrBottomImageContainer: {
        width: '100%',
        height: '20rem',
        position: 'relative',
        margin: "0 0 5rem",
    }
}))

const MeetSvRealty = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.meetVsReality}>
                <Container maxWidth={'lg'}>
                    {/*text with divider*/}
                    <Box className={classes.textWithDividerContainer}>
                        <TextWithDivider>
                            Meet SV Reality
                        </TextWithDivider>
                    </Box>

                    {/*    Image container*/}
                    <Box className={classes.imageContainer}>
                        <Image priority src={'/images/meetSvRealty/1.jpg'} layout={'fill'} objectFit={'cover'}/>
                    </Box>

                    {/*    description*/}

                    <Box className={classes.descriptionContainer}>
                        <Typography variant={'h5'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur, culpa dicta
                            dolorem enim ipsum magnam maxime nesciunt perspiciatis possimus provident quae sequi sint
                            sunt
                            tenetur velit voluptate voluptates voluptatum.
                        </Typography>

                    </Box>

                    {/*    Button Container*/}
                    <Box className={classes.buttonContainer}>
                        <CButtonBlBorder>
                            Learn more
                        </CButtonBlBorder>
                    </Box>

                </Container>

            </div>

            <Box className={classes.mvrBottomImageContainer}>
                <Image priority src={'/images/meetSvRealty/2.jpg'} layout={'fill'} objectFit={'cover'}/>
            </Box>
        </>
    );
};

export default MeetSvRealty;
