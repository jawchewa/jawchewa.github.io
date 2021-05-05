import React from 'react';
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
    '@keyframes slideDown': {
        from: {top: 0},
        to: {top: '100%'}
    },
    image: {
        width: '100%',
        height: '101%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown 50s infinite',
        animationTimingFunction: 'linear'
    },
    '@keyframes slideDown2': {
        from: {top: '-100%'},
        to: {top: 0}
    },
    image2: {
        width: '100%',
        height: '101%',
        position: 'fixed',
        zIndex: -100,
        animation: '$slideDown2 50s infinite',
        animationTimingFunction: 'linear'
    }
});

export const Stars = () => {
    const classes = useStyles();
    return (
        <>
            <img className={classes.image2} src="/content/images/games/tapshot/Stars.png" alt="/content/images/games/tapshot/Stars.png" />
            <img className={classes.image} src="/content/images/games/tapshot/Stars.png" alt="/content/images/games/tapshot/Stars.png" />
        </>
    );
}
