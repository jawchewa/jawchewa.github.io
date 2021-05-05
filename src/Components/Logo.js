import React from 'react';
import {createUseStyles} from 'react-jss'
import { Link } from 'react-router-dom';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = createUseStyles({
    logo: {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        fontFamily: 'Russo One',
        textAlign: 'center',
        '&:hover': {
            color: 'cyan',
        },
    },
    link: {
        color: 'white',
        fontSize: 40,
        textDecoration: 'none',
        display: 'inline-block',
        margin: '10px',
        '&:hover': {
            color: 'cyan',
        },
    },
    title: {
        fontSize: 'min(7vw, 50px)',
        textDecoration: 'none',
        display: 'inline-block',
        margin: '0px'
    },
    subtitle: {
        fontSize: 'min(6vw, 30px)',
        margin: '0px'
    }
});

export const Logo = () => {
    const classes = useStyles();
    return (
        <div className={classes.logo}>
            <Link className={classes.link} to="/">
                <p className={classes.title}>
                    <CodeIcon style={{ fontSize: 'min(7vw, 40px)' }}/>
                    Josh Stephens
                    <SportsEsportsIcon style={{ fontSize: 'min(7vw, 40px)' }}/>
                </p>
                <p className={classes.subtitle}>Software & Game Developer</p>
            </Link>
        </div>
    );
}
