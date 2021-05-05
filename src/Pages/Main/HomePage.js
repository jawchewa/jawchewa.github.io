import React from 'react';
import { createUseStyles } from 'react-jss'
import { GameCarousel } from '../../Components/GameCarousel';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
    },
    body: {
        margin: '20px',
        fontSize: '24px',
        lineSize: '0px',
        textAlign: 'center',
    },
    text: {
        margin: '20px',
    },
    link: {
        color: 'cyan',
        fontWeight: 'bold',
    },
});

export const HomePage = ({children}) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h3 className={classes.text}>Hello there!</h3>
            <p className={classes.text}> My name is Josh Stephens. By day, I'm a professional Software Engineer and by night, I'm a hobbyist Game Developer. On this site, you can check out my <a className={classes.link} href="#/portfolio">Portfolio</a>, learn more <a className={classes.link} href="#/about">About Me</a> and how to <a className={classes.link} href="#/contact">Contact Me</a>, or check out my <a className={classes.link} href="/content/Joshua-Stephens-Resume.pdf" rel="noopener noreferrer" target="_blank">Résumé.</a></p>
            <h2 className={classes.title}>Project Preview</h2>
            <GameCarousel/>
        </div>
    );
}
