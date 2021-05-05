import React from 'react';
import { createUseStyles } from 'react-jss'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = createUseStyles({
    footer: {
        fontSize: '18px',
        margin: 'auto',
        display: 'table',
        width: '98%',
        marginTop: '10px',
        marginBottom: '10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        padding: '5px',
        '&:hover': {
            color: 'cyan',
        },
    },
    sourceLink: {
        color: 'white',
        padding: '5px',
        '&:hover': {
            color: 'cyan',
        },
    },
    rightAlign: {
        float: "right",
    },
});

export const Footer = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <a className={classes.link} href="https://www.linkedin.com/in/j-stephens/" rel="noopener noreferrer" target="_blank">
                <LinkedInIcon />
            </a>
            <a className={classes.link} href="https://twitter.com/Jawchewa" rel="noopener noreferrer" target="_blank">
                <TwitterIcon />
            </a>
            <a className={classes.link} href="https://github.com/jawchewa" rel="noopener noreferrer" target="_blank">
                <GitHubIcon />
            </a>
            <a className={classes.link} href="mailto:jawchewas@gmail.com">
                <EmailIcon />
            </a>
            <span className={classes.rightAlign}>
                {'< Website designed and created by Josh Stephens. -'} 
                <a className={classes.sourceLink} href="https://github.com/jawchewa/jawchewa.github.io" rel="noopener noreferrer" target="_blank">
                    {'View Source'}
                </a>
                {'>'}
            </span>
        </div>
    );
}
