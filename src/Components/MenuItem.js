import React from 'react';
import {createUseStyles} from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
    link: {
        color: 'white',
        padding: '4px',
        display: 'block',
        textAlign: 'center',
        textDecoration: 'none',
        transition: 'transform .4s',
        '&:hover': {
            color: 'yellow !important',
            transform: 'scale(1.2)'
        }
    }
});

export const MenuItem = ({children, url}) => {
    const classes = useStyles();
    return (
        <Link className={classes.link} to={url}>{children}</Link>
    );
}
