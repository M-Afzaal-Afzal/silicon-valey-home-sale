import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: 0,
        border: '1px solid #fff',
        fontSize:'1.6rem',
        padding:'.5rem 4rem',
        color:'white',
    }
}))

const CButtonBlBorder = ({children,...props}) => {

    const classes = useStyles();

    return (
        <Button className={classes.button} {...props}>
            {children}
        </Button>
    );
};

export default CButtonBlBorder;