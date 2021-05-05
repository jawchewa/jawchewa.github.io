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

export const GraveGuardianPage = ({children}) => {
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
                Grave Guardian
            </h2>
            <Game url="/content/games/GraveGuardian/index.html" alt="/content/images/games/grave-guardian/GraveGuardian.mp4" onAltClick={() => openDialog(0)}/>

            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Grave guardian is a stealth adventure game about a young pacifist ghost named Spoops. This timid young ghost that was rudely awoken from the dead without his permission. Go on adventure through a spooky graveyard to put a stop to the antics of the evil necromancer. Use Spoop's abilities to possess the monsters and creatures in the graveyard, so you can progress without resorting to violence</p>
                        <p>This game was made in Unity in 48 hours as part of the Utah Indie Game Jam 2017. The theme of the game jam was "Pacifist", which is why we decided to make a stealth adventure game with a pacifist protagonist. This game actually won first place in the game jam for both the audience choice award, and the judges choice award. More details about the event can be found <a className={classes.link} href="https://itch.io/jam/utah-indie-game-jam-2017">here</a>. The game was originally only playable on Windows, but I later came back and ported the game to be playable in web browsers.</p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>WASD to move</li>
                            <li>Left click to possess other characters and interact with things</li>
                            <li>Right Click to Turn Invisible</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>My Roles: Gameplay Programmer, Game Designer, Writer</li>
                            <li>Tools Used: Unity3D, C#, Blender</li>
                            <li>Team Size: 2 people</li>
                            <li>Time Frame: 48 hours</li>
                            <li>Downloads: <a className={classes.link} href="/content/games/Windows/GraveGuardian.zip">Windows</a></li>
                            <li><a className={classes.link} href="https://jawchewa.itch.io/grave-guardian">Original itch.io Page</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Josh Stephens: Gameplay Programmer, Game Designer, Writer</li>
                            <li>Morgan McClure: Level Designer, Gameplay Programmer, Game Designer</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/environments/fantasy/halloween-faceted-pack-74067">Halloween Faceted Pack</a> by ZugZug Art</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/characters/toon-reaper-62209">Toon Reaper</a> by Meshtint Studio</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/characters/animals/birds/lowpoly-toon-crow-56933">Lowpoly Toon Crow</a> by Polydactyl</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/characters/toon-zombies-16655">Toon Zombies</a> by Unluck Software</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/a-wonderful-nightmare">A Wonderful Nightmare</a> by SpiderDave</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/awakening-of-the-harvestman">Awakening of the Harvestman</a> by Michael Klier</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/the-crypt">The Crypt</a> by Michael Klier</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/casket">Casket</a> by Tozan</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/ghoulish-fun">Ghoulish Fun</a> by Eric Matyas</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/game-music-loop-intense">Intense</a> by HorrorPen</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/inspired-sonata-arctica-2-2">Inspired by Sonata Arctica</a> by Gobusto</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <img onClick={() => openDialog(1)} src='/content/images/games/grave-guardian/Screenshot1.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(2)} src='/content/images/games/grave-guardian/Screenshot2.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(3)} src='/content/images/games/grave-guardian/Screenshot3.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(4)} src='/content/images/games/grave-guardian/Screenshot4.jpg' alt='' className={classes.image}/>
                        <img onClick={() => openDialog(5)} src='/content/images/games/grave-guardian/Screenshot5.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/grave-guardian/GraveGuardian.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/grave-guardian/Screenshot1.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/grave-guardian/Screenshot2.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/grave-guardian/Screenshot3.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/grave-guardian/Screenshot4.jpg' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/grave-guardian/Screenshot5.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
