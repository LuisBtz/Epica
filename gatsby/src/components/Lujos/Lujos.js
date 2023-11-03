import React from 'react';
import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"

const Lujos = ({slider}) => {


    const sliderRef = React.useRef(null);
    
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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        nextArrow: <SampleNextArrow onClick={handleNextClick}/>,
        prevArrow: <SamplePrevArrow onClick={handlePrevClick} />,
        ref: sliderRef,
        className: "center",
        centerMode: true,
        centerPadding: "60px",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
            {
              breakpoint: 780,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerPadding: "30px",
                autoplay: true
              }
            },
          ]
      };



    return(
        <LujosContainer id='amenidades'>
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
    
    li.item {
    padding-right: 10px;
    padding-left: 10px;
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

@media (max-width: 780px) {
        .title {
            text-align: center;
        }
    }
    
`

const SliderContainer = styled(Slider)`
margin-top: 50px;
position: relative;
top: 0;
height: 100%;
button.slick-arrow {
    background-color: #463436;
    position: absolute;
    top: 0;
    z-index: 1;
    width: 30px;
    height: 30px;
    img {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
button.slick-next {
    right: 0;
    top: -50px;
    border-radius: 0 50% 50% 0;
}
button.slick-prev {
    right: 31px;
    top: -50px;
    border-radius: 50% 0 0 50%;
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