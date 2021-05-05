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

export const RogueBotPage = ({children}) => {
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
                Rogue Bot
            </h2>
            <Game url="/content/games/RogueBot/index.html" alt="/content/images/games/rogue-bot/RogueBot.mp4" onAltClick={() => openDialog(0)}/>
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Rogue Bot is a Rougelike dungeon crawler shoot-em-up about a small robot who goes rogue and betrays all of the other robots. He must explore vast randomly generated dungeons across several unique planets to bring their evil plans to an end. Throughout the game, Rogue Bot will find several materials, which he can use to craft into new weapons and items.</p>
                        <p>This game was made as the main project for our Game Programming and Production class. It was made by a team including myself, and two other students. It was made in Unity over a period of about 10 weeks. The project went pretty smoothly overall, although we did have to rush a bit at the end to include everything that we wanted.</p>
                        <h3 className={classes.details}>Keyboard/Mouse Controls:</h3>
                        <ul className={classes.details}>
                            <li>WASD to move</li>
                            <li>Mouse to aim</li>
                            <li>Click to shoot (Once you have a gun)</li>
                            <li>Press F to use Grenades</li>
                            <li>Press E to Open a Menu</li>
                            <li>Press Q to Craft when next to a Crafting Station and buy items from shop</li>
                            <li>Press C to Open Map</li>
                        </ul>
                        <h3 className={classes.details}>Xbox Gamepad Controls:</h3>
                        <ul className={classes.details}>
                            <li>Left Stick to move</li>
                            <li>Right Stick to aim</li>
                            <li>Right Trigger to shoot (Once you have a gun)</li>
                            <li>Press X to use Grenades</li>
                            <li>Press Start to Open a Menu</li>
                            <li>Press Y to Craft when next to a Crafting Station and buy items from shop</li>
                            <li>Press Select to Open Map</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>Tools Used: Unity3D, C#, Blender</li>
                            <li>Team Size: 3 people</li>
                            <li>Time Frame: 10 weeks</li>
                            <li>Downloads: <a className={classes.link} href="/content/games/Windows/RogueBot.zip">Windows</a></li>
                            <li><a className={classes.link} href="https://gamejolt.com/games/rogue-bot/231671">Original Game Jolt Page</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Josh Stephens: Gameplay Programmer, AI Programmer, UI Programmer</li>
                            <li>Shawn McCuistion: Map Generation Programmer, Gameplay Programmer, Artist</li>
                            <li>Denver Boyer: Programmer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/audio/music/electronic/dark-future-music-3777">Dark Future Music</a> by Daniel Gooding</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-door-21813">Sci-Fi Door</a> by 3DMondra</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/characters/robots/scifi-enemies-and-vehicles-15159">SciFi Enemies and Vehicles</a> by Popup Asylum</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/environments/sci-fi/sci-fi-battery-pack-free-19738">SCI-Fi Battery Pack</a> by 256px</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/rogue-bot/Screenshot3.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/rogue-bot/Screenshot2.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/rogue-bot/Screenshot6.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/rogue-bot/Screenshot7.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/rogue-bot/Screenshot8.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(6)} src='/content/images/games/rogue-bot/Screenshot9.png' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(7)} src='/content/images/games/rogue-bot/Screenshot5.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/rogue-bot/RogueBot.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot3.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot6.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot7.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot8.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot9.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/rogue-bot/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
