import React from 'react';
import {createUseStyles} from 'react-jss'
import Slider from "react-slick";
import games from '../Data/games.json';

const useStyles = createUseStyles({
    container: {
        color: 'white',
        background: 'radial-gradient(ellipse at center, #1e579988 0%,#256ec688 0%,#06307a88 100%)',
        borderRadius: 5,
        padding: 40,
        paddingTop: 0,
        paddingBottom: 20,
        fontSize: 30,
        border: '5px solid white',
        margin: '0px',
        textAlign: 'center',
    },
    slideBody: {
        height: 'auto',
        textAlign: 'center',
    },
    title: {
        fontWeight: 'bold',
        textDecoration: 'none',
        fontFamily: 'Russo One',
        margin: '20px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            color: 'cyan !important',
        }
    },
    detailsLink: {
        color: 'cyan',
        textDecoration: 'underline',
        fontSize: '20px',
        paddingTop: '0px',
        margin: '0px',
        marginBottom: '10px'
    },
    slideImage: {
        maxWidth: '90%',
        maxHeight: '540px',
        display: 'inherit !important',
        margin: 'auto',
        background: 'transparent url(/content/images/loading.gif) 50% no-repeat'
    },
    slideIcon: {
        maxWidth: '100px',
        maxHeight: '100px',
        border: '3px white solid',
        transition: 'transform .5s',
        transform: 'scale(0.95)',
        zIndex: 1,
        '&:hover': {
            transform: 'scale(1.1)',
            zIndex: 10,
            border: '3px cyan solid',
        }
    },
    description: {
        color: 'white !important',
        fontSize: '20px',
        paddingTop: '0px',
        margin: '10px',
        marginBottom: '0px',
        fontWeight: 'bold',
    },
});

function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, transform: 'scale(1.5)' }}
        onClick={onClick}
      />
    );
  }

export const GameCarousel = () => {
    const classes = useStyles();
    var settings = {
        customPaging: function(i) {
            return (
                <span>
                    <img src={games[i].icon} alt={i} className={classes.slideIcon}/>
                </span>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        lazyLoad: 'progressive',
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: false,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    };

    return (
        <div className={classes.container}>
            <Slider {...settings}>
                {games.map(p => (p.previewImage && p.name) ? (
                    <a href={p.url} className={classes.link}>
                        <div className={classes.slideBody}>
                            <p className={classes.title}>{p.name}</p>
                            <video loop autoPlay muted className={classes.slideImage}>
                                <source src={p.previewImage} type="video/mp4"/>
                            </video>
                        </div>
                        <p className={classes.description}>
                            {p.shortText}
                        </p>
                        <div className={classes.detailsLink}>More Details</div>
                    </a>
                ) : null)}
            </Slider>
        </div>
    );
}
