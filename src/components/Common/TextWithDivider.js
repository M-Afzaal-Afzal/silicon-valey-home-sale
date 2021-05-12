import React from 'react';
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    divider: {
        height: '2px',
        background: "#1a1a1a",
        width: "6.5rem",
        margin: "1rem 0",
    },
    text: {
        textTransform: "uppercase",
        fontSize: '2rem',
    }
}))

const TextWithDivider = ({children}) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.text} variant={'h3'}>
                {children}
            </Typography>
            <Divider className={classes.divider}/>
        </Box>
    );
};

export default TextWithDivider;