import React from 'react';
import {createUseStyles} from 'react-jss'
import { Button } from '@material-ui/core';

const useStyles = createUseStyles({
    game: {
        margin: '0 auto',
        display: 'table',
    },
    video: {
        maxWidth: '90%',
        display: 'inherit !important',
        margin: 'auto',
        background: 'transparent url(/content/images/loading.gif) 50% no-repeat',
    },
    runButton: {
        margin: 'auto !important',
        display: 'flex !important',
        top: '50%',
        fontFamily: 'Russo One !important',
        cursor: 'pointer',
        "@media only screen and (max-width: 960px)": {
            display: 'none !important',
        }
    }
});

function ScrollingY( event ) {
    window.scrollBy({
        top: event.deltaY,
        left: event.deltaX
    });
}

export const Game = ({url, alt, width="960px", height="640px", onAltClick}) => {
    const classes = useStyles();
    const [isInGame, setInGame] = React.useState(false);

    return (
        <div className={classes.game}>
            {(!alt || isInGame) && (
                <iframe id="iframeUnityProject" title='Game' src={url} width={width} height={height} frameBorder="0" scrolling="no" allowFullScreen msallowfullscreen="true"webkitallowfullscreen="true" mozallowfullscreen="true" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr"/>
            )}
            {!isInGame && (
                <div>
                    <video onClick={() => onAltClick()} loop autoPlay muted className={classes.video}>
                        <source src={alt} type="video/mp4"/>
                    </video>
                    <br/>
                    <Button variant="contained" color="primary" className={classes.runButton} onClick={() => {
                        setInGame(true);
                        setTimeout(function(){
                            if(document.getElementById("iframeUnityProject"))
                            {
                                var iframeElement = document.getElementById("iframeUnityProject").contentWindow;
                                iframeElement.addEventListener("wheel", ScrollingY, true);

                            }
                        }, 1000);
                    }}>Click Here to Play</Button>
                </div>
            )}
        </div>
    );
}
