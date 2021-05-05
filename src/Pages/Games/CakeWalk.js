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


export const CakeWalkPage = ({children}) => {
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
                Cake Walk
            </h2>
            <Game url="/content/games/CakeWalk/index.html" alt="/content/images/games/cake-walk/CakeWalk.mp4" onAltClick={() => openDialog(0)}/>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Cake Walk is a 2D action platformer starring Vanilla the Time Witch. Vanilla’s magic cake has been stolen by the evil Demon King, and you must help her use her magical time powers to get it back. Being a time witch, Vanilla has the power to speed up, slow down and rewind time to help her solve puzzles and complete challenges.</p>
                        <p>This game was made by myself and some friends during a 72 hour school game jam. I ended up being in charge of implementing most of the main gameplay mechanics including the time control mechanics, as well as some of the movement options.</p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>Arrow Keys to move</li>
                            <li>Press the Up arrow key to jump</li>
                            <li>Press Z to shoot fire</li>
                            <li>Press X to rewind time</li>
                            <li>Press C to speed up time</li>
                            <li>Press V to slow down time</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Gameplay Programmer, Designer</li>
                            <li>Tools Used: Unity, C#, Tiled2D</li>
                            <li>Team Size: 3 people</li>
                            <li>Time Frame: 72 hours</li>
                            <li>Downloads: <a className={classes.link} href="/content/games/Windows/CakeWalk.zip">Windows</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Joshua Stephens: Gameplay Programmer, UI Programmer, Designer</li>
                            <li>Richard Zamora: Gameplay Programmer, Artist, Designer</li>
                            <li>William Walls: Level Designer, Programmer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://opengameart.org/content/country-side-platform-tiles">Country Side Platform Tiles</a> by ansimuz</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/platform-tileset-nature">Platform tileset nature</a> by Eris</li>
                            <li><a className={classes.link} href="https://freesound.org/people/dpren/sounds/250115/">very lush and swag loop</a> by dpren</li>
                            <li><a className={classes.link} href="https://tristanlohengrin.bandcamp.com/track/introduction-8bit">Introduction 8bit</a> by Tristan Lohengrin</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/battle-theme-1">Battle Theme</a> by Mega Pixel Music Lab</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/wgs-music-20-happy-land-loops">Happy Land</a> by Retimer</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/fast-fight-battle-music">Fast fight / battle music</a> by Ville Nousiainen</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/mushroom-dance">Mushroom Dance</a> by bart</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/cake-walk/Screenshot1.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/cake-walk/Screenshot2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/cake-walk/Screenshot4.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/cake-walk/Screenshot5.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/cake-walk/Screenshot6.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/cake-walk/CakeWalk.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/cake-walk/Screenshot1.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/cake-walk/Screenshot2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/cake-walk/Screenshot4.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/cake-walk/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/cake-walk/Screenshot6.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
