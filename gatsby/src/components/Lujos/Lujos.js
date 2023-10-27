import React from "react";
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Lujos = ({slider}) => {


    const settings = {
        arrows: true,
        centerPadding: "0px",
        centerMode: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
      };



    return(
        <LujosContainer>
            <div className='title'>
                <BlockContent
                    blocks={slider._rawSliderTitle}
                />
            </div>
            <SliderContainer className="slider" {...settings}>
                {slider.carrusel.map((item) => {
                        const imageGetDataImage = getImage(item.image && item.image.asset)
                        const imageGetDataImageAlt = item.image && item.image.textoAlternativo
                    
                        const iconGetDataImage = getImage(item.icon && item.icon.asset)
                        const iconGetDataImageAlt = item.icon && item.icon.textoAlternativo
                    
                    return (
                        <li 
                            kay={item._key} 
                            className='item'
                        >
                            <div className="imageContainer">
                                <div className="image">
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={imageGetDataImage}
                                        alt={imageGetDataImageAlt}
                                    />
                                </div>
                                <div className="icon">
                                        <GatsbyImage
                                            style={{ height: "100%", width: "100%" }}
                                            image={iconGetDataImage}
                                            alt={iconGetDataImageAlt}
                                        />
                                    </div>
                            </div>
                            <h4>{item.itemName}</h4>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </SliderContainer>
        </LujosContainer>
    )
}

const LujosContainer = styled.section`
    margin-top: 100px;
    
`

const SliderContainer = styled(Slider)`
margin-top: 50px;
position: relative;
top: 0;
height: 100%;
.item {
    padding-right: 20px;
    &:hover {
        .imageContainer {
            .image {
                filter: grayscale(0) !important;
            }
        }
    }
    .imageContainer {
        position: relative;
        margin-bottom: 20px;
        
        .icon {
            position: absolute;
            width: 20%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .image {
            filter: grayscale(1);
            transition: all 350ms ease-in-out;
        }
    }
    h4 {
            padding-bottom: 20px;
        }
    
}
/* .slick-arrow {
    position: absolute;
    z-index: 1;
    bottom: 16px;
    transform: translateY(-50%);
    img {
        width: 25px;
        @media (max-width: 730px) {
          width: 25px;
        }
    }
} */
`

export default Lujos