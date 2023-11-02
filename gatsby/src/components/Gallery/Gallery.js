import React, { useState } from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Gallery = ({gallery}) => {

    const imageGetDataImage = getImage(gallery.galleryMainImage && gallery.galleryMainImage.asset)
    const imageGetDataImageAlt = gallery.galleryMainImage && gallery.galleryMainImage.textoAlternativo


    const [slider, showSlider] = useState(false);


    const sliderRef = React.useRef(null);
    React.useEffect(() => {
      const track = sliderRef.current.innerSlider.list.querySelector('.slick-track');
      const focusSlider = setTimeout(() => {
        const slide = track.querySelector('.slick-slide');
        slide.focus();
      }, 0);
      return () => clearTimeout(focusSlider);
    }, []);
    const handleNextClick = () => sliderRef.current.slickNext();
    const handlePrevClick = () => sliderRef.current.slickPrev();


    



    function SampleNextArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img src='/Right_ arrow.png' alt='arrow button right' />
          </button>
        );
      }

      function SamplePrevArrow(props) {
        const { className, onClick } = props;
        return (
          <button className={className} onClick={onClick} onKeyDown={onClick}>
            <img src='/Left_ arrow.png' alt='arrow button left'  />
          </button>
        );
      }





    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        nextArrow: <SampleNextArrow onClick={handleNextClick}/>,
        prevArrow: <SamplePrevArrow onClick={handlePrevClick} />,
        ref: sliderRef,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
      };




    return(
        <GalleryContainer>

            <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={imageGetDataImage}
                    alt={imageGetDataImageAlt}
                />
            </div>

            <div className='texto'>
                <div className='title'>
                    <BlockContent
                        blocks={gallery._rawGalleryTitle}
                    />
                </div>
                <div className='description'>
                    <p>{gallery.galleryDescription}</p>
                </div>
                <button onClick={() => showSlider(!slider)}><img src='iconGallery.png' alt='Gallery Epica Gallery' /> <p>Galería 01 / 0{gallery.gallery.length}</p></button>
            </div>

            <div className={slider ? 'overlayGallery active' : 'overlayGallery'}>
                <button onClick={() => showSlider(!slider)} className="close"><img src="/x.png" alt='Close button' /></button>
                <SliderContainer className="slider" {...settings}>
                    {gallery.gallery.map((item) => {
                           const imageGalleryGetDataImage = getImage(item.image && item.image.asset)
                           const imageGalleryGetDataImageAlt = item.image && item.image.textoAlternativo
                        
                        
                        return (
                            <li 
                                kay={item._key} 
                                className='item'
                            >
                                <div className="image">
                                    <GatsbyImage
                                        style={{ height: "100%", width: "100%" }}
                                        image={imageGalleryGetDataImage}
                                        alt={imageGalleryGetDataImageAlt}
                                    />
                                </div>
                                <div className="text">
                                    <h2>{item.itemName}</h2>
                                    <p>{item.description}</p>
                                </div>
                               
                            </li>
                        )
                    })}
                </SliderContainer>

            </div>
        </GalleryContainer>
    )
}

const GalleryContainer = styled.section`
    position: relative;
    margin-top: 100px;
    .texto {
        position: absolute;
        padding: 0 50px;
        width: 50%;
        top: 50%;
        transform: translateY(-50%);
        color: var(--white);
        line-height: 1;
        @media (max-width: 950px) {
            width: 100%;
            padding: 0 20px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            h2 {
                font-size: 1.2rem;
            }
        }
        .description {
            margin-top: 20px;
            line-height: 1.2;
            
        }
        button {
            margin-top: 20px;
            color: white;
            display: flex;
            img {
                width: 20px;
                margin-right: 15px;
            }
            p {
                width: 100%;
                text-decoration: underline;
            }
        }
    }
    .active {
        display: block !important;
    }
    .overlayGallery {
        display: none;
        position: fixed;
        z-index: 1;
        background-color: rgba(0, 0, 0, 1);
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        .close {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 20px;
            right: 20px;
            z-index: 22;
            img {
                width: 100%;
            }
        }

    }
`


const SliderContainer = styled(Slider)`
    height: 100vh;
    position: relative;
    @media (max-width: 750px) {
            height: auto;
            margin-top: 50%;
            height: auto !important;
        }  
    .slick-list {
        height: 100%;
        @media (max-width: 750px) {
            height: auto !important;
        }  
    }
    .image {
        height: 100vh;
        @media (max-width: 750px) {
            height: auto !important;
        }   
    }
    button.slick-arrow {
        background-color: #463436;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        img {
            width: 15px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    button.slick-next {
        right: 20px;
    }
    button.slick-prev {
        left: 20px;
    }
    .item {
        position: relative;
        
        .text {
            position: absolute;
            text-align: center;
            bottom: 50px;
            max-width: 700px;
            margin: 0 auto;
            left: 50%;
            transform: translateX(-50%);
            color: var(--white);
            @media (max-width: 750px) {
                position: static;
                transform: none;
                margin-top: 50px;
                padding: 0 20px;
            }
            h2 {
                font-size: 1.1rem;
                margin-bottom: 10px;
            }
            p {
                font: 1rem;
            }
        }
    }
    

`

export default Gallery