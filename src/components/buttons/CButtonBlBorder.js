import React from 'react';
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        borderRadius: 0,
        border: '1px solid #000000',
        fontSize:'1.2rem',
        padding:'.5rem 1rem',
        color:'#000000',
    }
}))

const CButtonWBorder = ({children,...props}) => {

    const classes = useStyles();

    return (
        <Button className={classes.button} {...props}>
            {children}
        </Button>
    );
};

export default CButtonWBorder;