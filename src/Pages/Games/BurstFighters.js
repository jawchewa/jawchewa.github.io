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
        width: '45%',
        marginRight: '5px',
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

export const BurstFightersPage = ({children}) => {
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
                Burst Figters
            </h2>
            <Game url="/content/games/BurstFighters/index.html" alt="/content/images/games/burst-fighters/BurstFighters.mp4" height="820px" width="460px" onAltClick={() => openDialog(0)}/>
            
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Burst Fighters is a fantasy Physics-based RPG designed for mobile platforms. Travel through a fantasy kingdom and collect powerful coin warriors to battles accross a variety of locations; from beautiful beaches, to fiery volcanoes. In battle, you can bring three coins in your party, to fight against other enemy coins. When the time is right, tap the screen to unleash a powerful burst attack.</p>
                        <p>This project was developed for a Neumont University Enterprise Project, which is designed to give students real work experience by building and releasing real products.</p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>Tap on a coin, and pull back to aim. Release to shoot. Hit your opponents to deal damage</li>
                            <li>Before your coin stops moving, tap the screen to unleash your burst ability</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Android, Web Browser</li>
                            <li>Tools Used: Unity3D, C#</li>
                            <li>Team Size: 8 people</li>
                            <li>Time Frame: 10 weeks</li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Joshua Stephens: Gameplay Programmer, Level Designer, UI Programmer</li>
                            <li>Richard Zamora: Gameplay Programmer, Systems Programmer, Project Lead</li>
                            <li>Thadius Novak: Gameplay Programmer, AI Programmer</li>
                            <li>Joshua Kauer: Gameplay Programmer, Systems Programmer</li>
                            <li>Morgan McClure: Gameplay Programmer, Level Designer</li>
                            <li>William Walls: UI Programmer, Gameplay Programmer</li>
                            <li>Cameron Watkins: UI Programmer, Enemy Designer</li>
                            <li>Andrew Velez: UI Programmer, Gameplay Programmer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/2d/textures-materials/2d-background-pack-vol-1-20014">2D Background Pack Vol 1</a> by Wizcorp Inc</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/2d/textures-materials/2d-fantasy-art-assets-full-pack-20223">2D Fantasy Art Assets Full Pack</a> by Wizcorp Inc</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/audio/music/orchestral/mega-game-music-collection-54687">Mega Game Music Collection</a> by Muz Station Productions</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/2d/gui/nightfall-gui-65036">Nightfall GUI</a> by Kodiak Graphics</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/2d/textures-materials/pbs-materials-variety-pack-34607">PBS Materials Variety Pack</a> by Integrity Software & Games</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/burst-fighters/Screenshot1.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/burst-fighters/Screenshot2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/burst-fighters/Screenshot3.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/burst-fighters/Screenshot4.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/burst-fighters/Screenshot6.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='/content/images/games/burst-fighters/Screenshot5.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/burst-fighters/BurstFighters.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot1.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot3.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot4.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot6.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/burst-fighters/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
