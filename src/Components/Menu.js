import React from 'react';
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    menu: {
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e5799 0%,#2989d8 0%,#1e5799 100%,#7db9e8 100%)',
        borderRadius: 5,
        padding: 10,
        margin: 10,
        fontSize: 40,
        border: '5px solid white',
        fontFamily: 'VT323',
        overflowY: 'scroll',
        height: '64%'
    }
});

export const Menu = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.menu}>
            <span>
                {children}
            </span>
        </div>
    );
}
