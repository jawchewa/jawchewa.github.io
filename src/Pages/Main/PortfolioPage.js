import React from 'react';
import { createUseStyles } from 'react-jss'
import { Portfolio } from '../../Components/Portfolio';
import games from '../../Data/games.json';
import projects from '../../Data/projects.json';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
        borderBottom: 'white 4px solid',
        fontSize: '40px',
    },
    subtitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
    },
    body: {
        margin: '40px',
        fontSize: '24px',
        lineSize: '0px',
    },
});

export const PortfolioPage = ({children, url}) => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h2 className={classes.title}>
                Portfolio
            </h2>
            <h3 className={classes.subtitle}>
                Games
            </h3>
            <Portfolio projects={games}/>
            <h3 className={classes.subtitle}>
                Other Projects
            </h3>
            <Portfolio projects={projects}/>
        </div>
    );
}
