import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    testimonialText: {
        color: 'white',
    },
    testimonialTextContainer: {
        marginBottom: '8rem',
    },
    bottomText: {
        color: 'white',
        fontSize: '1.3rem',
    }
}))

const Testimonial = ({testimonialText,author,role}) => {

    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.testimonialTextContainer}>
                <Typography variant={'h6'} className={classes.testimonialText}>
                    {testimonialText}
                </Typography>
            </Box>
            <Box>
                <Typography className={classes.bottomText} variant={'h6'}>
                    {author}
                </Typography>
                <Typography className={classes.bottomText} variant={'h6'}>
                    {role}
                </Typography>
            </Box>
        </Box>
    );
};

export default Testimonial;