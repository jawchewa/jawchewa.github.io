import React from 'react';
import { createUseStyles } from 'react-jss'
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center',
    },
    body: {
        margin: '20px',
        fontSize: '24px',
        lineSize: '0px',
    },
    text: {
        margin: '20px',
    },
    skills: {
        textAlign: 'center',
        margin: 'auto',
    },
    table: {
        width: '96% !important',
        margin: 'auto',
        color: 'white',
        borderRadius: 5,
        maxWidth: '1000px !important',
        marginTop: 15
    },
    cell: {
        color: 'white !important',
        fontSize: '24px',
        background: 'radial-gradient(ellipse at center, #1e579988 0%,#256ec688 0%,#06307a88 100%)',
        padding: 10,
        margin: 'auto !important',
        display: 'table',
        maxWidth: '420px !important',
        textAlign: 'center',
        border: '5px solid white',
    },
    tableContents: {
        margin: '0px',
        fontSize: '20px',
    }
});

export const AboutPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.body}>
            <h2 className={classes.title}>
                About Me
            </h2>
            <h3 className={classes.text}>Hello World!</h3>
            <p className={classes.text}>My name is Josh Stephens, also known online under the username, <code>"Jawchewa"</code>. During the day, I work a professional Software Engineer, spending my days building software, web pages and APIs. But in my freetime, I like to work as a hobbyist game developer and game modder.</p>
            <p className={classes.text}>Ever since I was young, I've been fascinated by computers and video games. As a teenager, my curiosity got the better of me, and I started teaching myself everything I could about programming and game development. I've gone through college to level up my skills and obtained a Bachelor's Degree in Sofware and Game Development, and since then, I've gone on to start my career as a professional Sofware Engineer.</p>
            <h3 className={classes.skills}>Skills</h3>
            <Grid container spacing={0} className={classes.table}>
                <Grid item xs={12} md={4} className={classes.cell}>
                    <h3 className={classes.tableContents}>Specialties:</h3>
                    <div className={classes.tableContents}>
                        <div>Gameplay Programming</div>
                        <div>UI Programming</div>
                        <div>AI Programming</div>
                        <div>Web Development</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.cell}>
                    <h3 className={classes.tableContents}>Programming Languages:</h3>
                    <div className={classes.tableContents}>
                        <div>C# / .Net</div>
                        <div>C++</div>
                        <div>Javascript</div>
                        <div>React / Redux</div>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.cell}>
                    <h3 className={classes.tableContents}>Development Tools:</h3>
                    <div className={classes.tableContents}>
                        <div>Unity Game Engine</div>
                        <div>Unreal Game Engine</div>
                        <div>Visual Studio</div>
                        <div>Git</div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
