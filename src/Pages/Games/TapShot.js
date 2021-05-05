import React from 'react';
import { createUseStyles } from 'react-jss';
import { Game } from '../../Components/Game';
import { ImageDialog } from '../../Components/ImageDialog';
import { Grid } from '@material-ui/core';

const useStyles = createUseStyles({
    title: {
        color: 'white',
        textAlign: 'center'
    },
    body: {
        marginBottom: '40px',
        marginRight: '20px',
        marginLeft: '20px',
        fontSize: '20px',
    },
    link: {
        color: 'cyan'
    },
    details: {
        marginTop: '0px',
        marginBottom: '10px',
    },
    images: {
        marginRight: '20px',
        marginLeft: '20px',
    },
    image: {
        width: '100%',
        marginTop: '10px',
        cursor: 'pointer',
    },
    video: {
        marginTop: '20px',
        width: '100%',
        height: '200px',
        left: 0,
        right: 0
    },
    mediaFull: {
        maxWidth: '90%',
        maxHeight: '540px',
        display: 'block',
        margin: 'auto',
    },
    videoContainer: {
        overflow: 'hidden',
        paddingBottom: '45%',
        position: 'relative',
        display: 'block !important',
        margin: 'auto',
        width: '85% !important',
        height: 0
    },
    videoResponsive: {
        left: 0,
        top: 0,
        height: '100%',
        width: '100%',
        maxWidth: '100%',
        maxHeight: '540px',
        position: 'absolute',
    }
});

export const TapshotPage = ({children}) => {
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    const [defaultImageId, setDefaultImageId] = React.useState(0);
    const classes = useStyles();

    function openDialog(id)
    {
        setDefaultImageId(id);
        setDialogOpen(true);
    }

    return (
        <div>
            <h2 className={classes.title}>
                Tap Shot
            </h2>
            <Game url="/content/games/Tapshot/index.html" alt="/content/images/games/tapshot/TapShot.mp4" onAltClick={() => openDialog(1)}/>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Tap Shot is a single button side-scrolling arcade shooter with a modern mobile-friendly design. You control a cursed spaceship that will both ascend and shoot every time you tap/click on the screen. Protect your ship by tapping to avoid asteroids, enemy ships and wormholes. Shoot down the obstacles in your way and collect gems to gain the highest score that you can!</p>
                        <p>This game was made in under 48 hours as part of both the Miz Game Jam, and Kenney Game Jam. It was designed for Android, but also supports Windows and can be run in the web browser as well. It was built as a mix of simple mobile games like Flappy Bird as well as classic arcade shoot-em-ups.</p>
                        <h3 className={classes.details}>Features:</h3>
                        <ul className={classes.details}>
                            <li>Randomly generated layouts to provide endless replayability</li>
                            <li>Mobile Friendly design</li>
                            <li>Simple One Button/Tap control scheme that is easy to learn, but hard to master.</li>
                        </ul>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>Tap/Click the screen or press space to both jump and shoot at the same time</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Android, Web Browser, Windows</li>
                            <li>Tools Used: Unity3D, C#</li>
                            <li>Time Frame: 48 hours</li>
                            <li><a className={classes.link} href="https://play.google.com/store/apps/details?id=com.Jawchewa.TapShot">Google Play Page</a></li>
                            <li><a className={classes.link} href="/content/games/Windows/TapShot.zip">Windows Download</a></li>
                            <li><a className={classes.link} href="https://jawchewa.itch.io/tap-shot">Original itch.io Page</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Josh Stephens: Solo Designer and Developer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li>Music: OBLIDIVM - <a className={classes.link} href="http://oblidivmmusic.blogspot.com.es/">http://oblidivmmusic.blogspot.com.es</a></li>
                            <li>Art and Fonts: Kenney - <a className={classes.link} href="https://kenney.nl/">https://kenney.nl</a></li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <iframe title="tapshotvideo" frameborder="0" className={classes.video} allowfullscreen="" src="//www.youtube.com/embed/aCCwsZyWfN0"></iframe>
                        <img onClick={() => openDialog(2)} src='/content/images/games/tapshot/Screenshot1.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/tapshot/Screenshot2.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/tapshot/Screenshot3.jpg' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div className={classes.videoContainer}>
                        <iframe width="560" height="349" title="tapshotvideo" frameborder="0" className={classes.videoResponsive} allowfullscreen="" src="//www.youtube.com/embed/aCCwsZyWfN0"></iframe>  
                    </div>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/tapshot/TapShot.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/tapshot/Screenshot1.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/tapshot/Screenshot2.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                    <img src='/content/images/games/tapshot/Screenshot3.jpg' alt='' className={classes.mediaFull}/>
                        </div>
                    <div>
                        <img src='/content/images/games/tapshot/Screenshot4.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/tapshot/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
