import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
    link: {
        color: 'white',
        display: 'block',
        padding: '4px',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform .4s',
        '&:hover': {
            color: 'yellow !important',
            transform: 'scale(1.2)'
        }
    }
});

export const MenuLink = ({children, url}) => {
    const classes = useStyles();
    return (
        <a className={classes.link} href={url} rel="noopener noreferrer" target="_blank">
            {children}
        </a>
    );
}
