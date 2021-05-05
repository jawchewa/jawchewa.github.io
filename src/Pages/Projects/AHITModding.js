import React from 'react';
import { createUseStyles } from 'react-jss';
import { ScreenshotCarousel } from '../../Components/ScreenshotCarousel';
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '0px',
        fontSize: '20px',
    },
    link: {
        color: 'cyan'
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    image: {
        width: '100%',
        marginTop: '10px',
        cursor: 'pointer',
    },
    gridItem: {
        padding: '16px !important',
    },
});


export const AHITModdingPage = () => {
    const classes = useStyles();
    return (
        <div>
            <h2 className={classes.title}>
                A Hat in Time Modding
            </h2>
            <ScreenshotCarousel
                images={[
                    '/content/images/projects/modding/AHIT1.png',
                    '/content/images/projects/modding/AHIT2.png',
                    '/content/images/projects/modding/AHIT3.png',
                    '/content/images/projects/modding/AHIT4.png',
                    '/content/images/projects/modding/AHIT5.png',
                    '/content/images/projects/modding/AHIT6.png',
                    '/content/images/projects/modding/AHIT7.png',
                ]}
            />
            <Grid container spacing={0}>
                <Grid item xs={12} md={7} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Over the past few years, I have gotten into game modding as a fun side hobby. Specifically, I have been working on creating creative new and innovative mods for the indie 3D platformer, A Hat in Time. I've made dozens of mods including custom hats, badges, costumes, and many other things. Some of my work has even been officially added to the game!</p>
                        <p>The mods I'm most proud of are the ones that introduce unique new gameplay mechanics that have never been seen before. I'm also proud of the custom hud menu mods that give players many new customization options.</p>
                        <p>Modding this game has been a great experience for me. It has given me experience working in a large existing code base, and has taught me many things about game design and game development. It has given me a chance to hone my skills with smaller more focused projects. It's also given me opportunities to make connections and collaborate with many other creative individuals in the modding community.</p>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Steam Workshop</li>
                            <li>My Roles: Gameplay Programmer, UI Programmer, Artist</li>
                            <li>Tools Used: Unreal Engine 3, UnrealScript, Blender</li>
                            <li><a className={classes.link} href="https://steamcommunity.com/workshop/filedetails/?id=2068630350">Link To Mod Highlights Collection</a></li>
=                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={5} className={classes.gridItem}>
                    <div className={classes.body}>
                        <img src='/content/images/projects/modding/AHITIcons.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
