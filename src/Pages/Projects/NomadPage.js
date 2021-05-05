import React from 'react';
import { createUseStyles } from 'react-jss';
import { ScreenshotCarousel } from '../../Components/ScreenshotCarousel';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '40px',
        marginRight: '40px',
        marginLeft: '40px',
        fontSize: '20px',
        width: '100%',
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    columns: {
        display: 'inline-flex',
        marginTop: '40px',
    },
});

export const NomadPage = () => {
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.title}>
                Nomad Development Kit
            </h2>
            <ScreenshotCarousel
                images={[
                    '/content/images/projects/nomad/Nomad0.png',
                    '/content/images/projects/nomad/Nomad1.png',
                    '/content/images/projects/nomad/Nomad2.png',
                    '/content/images/projects/nomad/Nomad3.png',
                    '/content/images/projects/nomad/Nomad4.png',
                    '/content/images/projects/nomad/Nomad5.png',
                    '/content/images/projects/nomad/Nomad6.jpg'
                ]}
            />
            <div className={classes.columns}>
                <div className={classes.body}>
                    <h3 className={classes.details}>Description:</h3>
                    <p>Nomad is an experimental cross-platform 3D game development tool. It was designed as a tool that allows game developers to develop games completely from an Android tablet. It also has support for development on windows. It features basic gameplay scripting through a built in Lua Editor. It also includes a level editor that allows you to create and edit 3D objects, and move them around the level.</p>
                    <p>This project was made as my college Capstone Project, which is project that gives senior students a chance to independently conceptualize and create a product over a period of 10 weeks. My original idea was to basically make a portable version of the Unity Game Editor. I ran into quite a few challenges during this project, and basically had to restart about 3 or 4 weeks into it. Because of this, it doesn't have quite as many features as I would have liked. However, I am still pretty proud of the amount that I was able to accomplish in such a short amount of time.</p>
                    <p>This project was also selected to participate in Neumont University's Capstone Project Invitational, which is a chance for some of the best Capstone Projects to come be shown of to Industry Professionals, and Alumni. It was an honor for me to be given the chance to come and show off my project.</p>
                    <p>This project is no longer being supported, but I am looking into remaking it using newer, more portable technologies.</p>
                    <h3 className={classes.details}>Details:</h3>
                    <ul className={classes.details}>
                        <li>Platform: Android, Windows</li>
                        <li>My Roles: Engine Programmer, UI Programmer</li>
                        <li>Tools Used: QT Framework, C++, OpenGL ES, Lua</li>
                        <li>Time Frame: 10 weeks</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
