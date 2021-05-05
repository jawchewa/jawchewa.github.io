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
    mediaFull: {
        maxWidth: '90%',
        maxHeight: '540px',
        display: 'block',
        margin: 'auto',
    },
});

export const HoloDefenderPage = ({children}) => {
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
                Holo Defender
            </h2>
            <Game url="/content/games/HoloDefender/index.html" alt="/content/images/games/holo-defender/HoloDefender.mp4" onAltClick={() => openDialog(0)}/>
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Holo Defender is an arcade tower defense designed for the Microsoft Hololens, and later ported to Windows and web browsers. It's a fairly standard tower defense, where robot foes move through predetermined paths trying to get to the player’s home base. Players must use their wits to strategically place a variety of towers onto the map to stop waves of enemies from progressing. However, once the player’s base has taken too much damage, it’s game over.</p>
                        <p>This game was originally developed a team of four students at Neumont University for a class about building Software Products for Emerging Platforms. We used this opportunity to try something new and decided to make a game for the Microsoft Hololens. The main goal was to learn about the platform, and the challenges of developing for it. It was a great experience, but unfortunately, we no longer have access to the hardware needed to develop for the hololens, so I later decided to port the project to PC and Web browsers, with a brand new UI, to allow more people to play it.</p>
                        <h3 className={classes.details}>How to play:</h3>
                        <ul className={classes.details}>
                            <li>Click on the tile where you want to place a tower</li>
                            <li>Select the tower you want to place (if you have enough money).</li>
                            <li>Click on a tower to upgrade or sell towers using the buttons on the right</li>
                            <li>Press the pause button at the top to pause the game, where you can quit back to the main menu</li>
                            <li>Press the fast forward button to speed up time.</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser, Hololens(formerly)</li>
                            <li>Tools Used: Unity3D, C#, Windows SDK</li>
                            <li>Team Size: 4 people</li>
                            <li>Time Frame: About 4 weeks</li>
                            <li>Downloads: <a className={classes.link} href="/content/games/Windows/HoloDefender.zip">Windows</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Josh Stephens: Game Designer, Gameplay Programmer, UI Programmer</li>
                            <li>Thadius Novak: AI Programmer, Gameplay Programmer</li>
                            <li>Joshua Kauer: Gameplay Programmer</li>
                            <li>Richard Zamora: Level Designer, UI Programmer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/chibii-robots-66019">Chibii Robots</a> by 3DRT</li>
                            <li><a className={classes.link} href="https://incompetech.com/">Various Songs</a> by Kevin MacLeod</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/holo-defender/Old1.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/holo-defender/Old3.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/holo-defender/Old4.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/holo-defender/Old5.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/holo-defender/New2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='/content/images/games/holo-defender/New1.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/holo-defender/HoloDefender.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/Old1.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/Old3.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/Old4.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/Old5.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/New2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/holo-defender/New1.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
