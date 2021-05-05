import React from 'react';
import { createUseStyles } from 'react-jss'
import { GameCarousel } from '../../Components/GameCarousel';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        marginBottom: '20px',
        marginTop: '0px',
    },
    body: {
        margin: '20px',
        fontSize: '24px',
        lineSize: '0px',
    },
    text: {
        margin: '20px',
        fontSize: '20px',
        textAlign: 'center'
    },
    link: {
        color: 'cyan',
        fontWeight: 'bold',
    },
});

export const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <p className={classes.text}>Hey there, I'm Josh! I'm a Game Developer who specializes in Gameplay Programming and UI Programming. I currently work full time as an Enterprise Software Engineer, but I'm always open to hearing about new opportunities! <br/>If you'd like to see some of my past work, I'd encourage you to check out my Game Development <a className={classes.link} href="#/portfolio">Portfolio</a>.</p>
            <GameCarousel/>
        </div>
    );
}
