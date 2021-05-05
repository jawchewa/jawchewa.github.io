import React from 'react';
import { createUseStyles } from 'react-jss'
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    appBar: {
        margin: 'auto',
        maxWidth: '1000px',
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e579988 0%,#256ec688 0%,#06307a88 100%)',
        borderRadius: '5px',
        padding: '5px',
        fontSize: '30px',
        border: '5px solid white',
        fontFamily: 'Russo One',
    }
});

export const AppBar = ({children}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={0} className={classes.appBar}>
            {children}
        </Grid>
    );
}
