import React from 'react';
import { createUseStyles } from 'react-jss'
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    gridList: {
        padding: '0px 20px !important',
        margin: '5px 0px',
    },
    image: {
        borderRadius: '8px',
        width: '100%',
        height: 'auto',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    title: {
        textDecorationLine: 'none',
        textAlign: 'center',
        background: 'none !important',
        fontFamily: 'Russo One',
        fontSize: '28px !important',
    },
    description: {
        textDecorationLine: 'none',
        color: 'rgb(255,255,255)',
        textAlign: 'center',
        background: 'none !important',
        fontSize: '20px !important',
        '&:hover': {
            display: 'block',
        }
    },
    gridItem: {
        margin: 'auto !important',
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e579933 0%,#256ec633 0%,#06307a33 100%)',
        borderRadius: 5,
        paddingLeft: '25px !important',
        paddingRight: '25px !important',
        paddingTop: '15px !important',
        paddingBottom: '15px !important',
        fontSize: 30,
        border: '5px solid white',
        transition: 'transform .5s',
        transform: 'scale(0.88)',
        zIndex: 1,
        '&:hover': {
            transform: 'scale(1)',
            zIndex: 10,
            background: 'radial-gradient(ellipse at center, #1e5799CC 0%,#256ec6CC 0%,#06307aCC 100%)',
        }
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: 'cyan !important',
        }
    }
});

export const Portfolio = ({projects}) => {
    const classes = useStyles();
    return (
        <Grid container spacing={8}>
            {projects.map((tile) => (
                <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
                    {!!tile.name && (
                        <a href={tile.url} className={classes.link}>
                            <h1 className={classes.title}>
                                {tile.name}
                            </h1>
                            <img className={classes.image} src={tile.icon} alt={tile.name} />
                            <h3 className={classes.description}>
                                {tile.shortText}
                            </h3>
                        </a>
                    )}
                </Grid>
            ))}
        </Grid>
    );
}
