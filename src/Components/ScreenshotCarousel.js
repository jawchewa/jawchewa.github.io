import React from 'react';
import {createUseStyles} from 'react-jss'
import Slider from "react-slick";

const useStyles = createUseStyles({
    container: {
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e579933 0%,#256ec633 0%,#06307a33 100%)',
        borderRadius: 5,
        padding: 25,
        fontSize: 30,
        border: '5px solid white',
        fontFamily: 'Russo One',
    },
    slideBody: {
        height: 'auto',
        textAlign: 'center',
    },
    slideImage: {
        maxWidth: '100%',
        maxHeight: '540px',
        display: 'inherit !important',
        margin: 'auto'
    },
});

export const ScreenshotCarousel = ({images}) => {
    const classes = useStyles();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 5000,
      };

    return (
        <div className={classes.container}>
            <Slider {...settings}>
                {images.map((img, index) => (img) ? (
                    <div className={classes.slideBody}>
                        <img src={img} alt={img} className={classes.slideImage}/>
                    </div>
                ) : null)}
            </Slider>
        </div>
    );
}
