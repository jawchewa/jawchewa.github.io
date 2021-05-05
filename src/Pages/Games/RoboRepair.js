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

export const RoboRepairPage = ({children}) => {
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
                Robo Repair
            </h2>
            <Game url="/content/games/RoboRepair/index.html" alt="/content/images/games/robo-repair/RoboRepair.mp4" onAltClick={() => openDialog(1)}/> 
            <Grid container spacing={0}>
                <Grid item xs={12} md={8} className={classes.gridItem}>
                    <div className={classes.body}>
                        <h3 className={classes.details}>Description:</h3>
                        <p>Robo Repair is an action platformer about a robot who crash landed into a hostile alien factory. During the crash, you and your partner were both damaged, so you must explore the factory and defend yourself against hostile alien robots to find the part needed to repair your loved one.</p>
                        <p>This game was developed as part of the 2020 Global Game Jam as a Windows game, and I later ported it to Web browser as well. The theme of the jam was "Repair" which is what inspired us to make a love story about a robot trying to repair their damaged significant other.</p>
                        <h3 className={classes.details}>Controls:</h3>
                        <ul className={classes.details}>
                            <li>WASD to move</li>
                            <li>Press Space to Jump</li>
                            <li>Move mouse to aim</li>
                            <li>Click to shoot</li>
                            <li>Escape to Pause and open Crafting/Inventory Menu</li>
                        </ul>
                        <h3 className={classes.details}>Details:</h3>
                        <ul className={classes.details}>
                            <li>Platform: Windows, Web Browser</li>
                            <li>Tools Used: Unity3D, C#, MagicaVoxel, Blender</li>
                            <li>Team Size: 4 people</li>
                            <li>Time Frame: 48 hours initially + half a day for ports and clean up</li>
                            <li>Downloads: <a className={classes.link} href="/content/games/Windows/RoboRepair.zip">Windows</a></li>
                            <li><a className={classes.link} href="https://globalgamejam.org/2020/games/robo-repair-0">Original Global Game Jam Page</a></li>
                        </ul>
                        <h3 className={classes.details}>Credits:</h3>
                        <ul className={classes.details}>
                            <li>Josh Stephens: UI Programmer, Gameplay Programmer, 3D Artist</li>
                            <li>Morgan McClure: Gameplay Programmer, AI Programmer</li>
                            <li>Justin Furtado: Gameplay Programmer, AI Programmer</li>
                            <li>Joshua Kauer: Gameplay Programmer, Level Design</li>
                        </ul>
                        <h3 className={classes.details}>Additional Resources:</h3>
                        <ul className={classes.details}>
                            <li><a className={classes.link} href="https://opengameart.org/content/8-bit-victory-loop">8-Bit Victory Loop</a> by Wolfgang</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/8-bit-level-music-mug-stage-sewer-pipes-underground">Mug Stage</a> by BossLevelVGM </li>
                            <li><a className={classes.link} href="https://opengameart.org/content/bit-space-ftl-inspired-loop-0">Bit Space</a> by Beam Theory </li>
                            <li><a className={classes.link} href="https://soundcloud.com/gundatsch">Raining Bits</a> by Gundatsch</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/characters/robots/voxel-robots-86550">Voxel Robots</a> by Moenen</li>
                            <li><a className={classes.link} href="https://assetstore.unity.com/packages/3d/environments/sci-fi/voxel-scifi-environment-free-version-101492">Voxel Scifi Environment</a> by trilobite_mx</li>
                            <li><a className={classes.link} href="https://opengameart.org/content/8-bit-victory-loop">8-Bit Victory Loop</a> by Wolfgang</li>
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={12} md={4} className={classes.gridItem}>
                    <div className={classes.images}>
                        <iframe title="roborepairvideo" frameborder="0" className={classes.video} allowfullscreen="" src="https://www.youtube.com/embed/h_i91LTs0qo"/>
                        <img  onClick={() => openDialog(2)} src='/content/images/games/robo-repair/Robo1.png' alt='' className={classes.image}/>
                        <img  onClick={() => openDialog(3)} src='/content/images/games/robo-repair/Robo3.png' alt='' className={classes.image}/>
                        <img  onClick={() => openDialog(4)} src='/content/images/games/robo-repair/Robo7.png' alt='' className={classes.image}/>
                        <img  onClick={() => openDialog(5)} src='/content/images/games/robo-repair/Robo2.png' alt='' className={classes.image}/>
                        <img  onClick={() => openDialog(6)} src='/content/images/games/robo-repair/RoboCredits.png' alt='' className={classes.image}/>
                    </div>
                </Grid>
            </Grid>
            {isDialogOpen &&
                <ImageDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)} initialSlideId={defaultImageId}>
                    <div className={classes.videoContainer}>
                        <iframe width="560" height="349" title="roborepairvideo" frameBorder="0" className={classes.videoResponsive} allowfullscreen="" src="https://www.youtube.com/embed/h_i91LTs0qo"/>
                    </div>
                    <div>
                        <video loop autoPlay muted className={classes.mediaFull}>
                            <source src={"/content/images/games/robo-repair/RoboRepair.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo1.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo3.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo7.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo2.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/RoboCredits.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo6.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo8.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo4.png' alt='' className={classes.mediaFull}/>
                    </div>
                    <div>
                        <img src='/content/images/games/robo-repair/Robo5.png' alt='' className={classes.mediaFull}/>
                    </div>
                </ImageDialog>
            }
        </div>
    );
}
