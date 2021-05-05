import React from 'react';
import {createUseStyles} from 'react-jss'
import Slider from "react-slick";
import Dialog from '@material-ui/core/Dialog';

const useStyles = createUseStyles({
    container: {
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e5799FF 0%,#256ec6FFFF 0%,#06307aFFFF 100%)',
        borderRadius: 5,
        padding: 30,
        fontSize: 30,
        fontFamily: 'Russo One',
        margin: '6px',
        height: '100%'
    },
});

export const ImageDialog = ({children, isOpen, onClose, initialSlideId}) => {
    const classes = useStyles();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: false,
        autoplay: false,
        autoplaySpeed: 5000,
        initialSlide: initialSlideId
    };

    return (
        <Dialog open={isOpen} onClose={onClose} fullWidth={true} maxWidth='lg' PaperProps={{
            style: {
                background: 'radial-gradient(ellipse at center, #1e5799FF 0%,#256ec6FF 0%,#06307aFF 100%)',
                borderRadius: 5,
                border: '5px solid white',
                boxShadow: 'none',
            },
          }}>
            <div className={classes.container}>
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        </Dialog>
    );
}
