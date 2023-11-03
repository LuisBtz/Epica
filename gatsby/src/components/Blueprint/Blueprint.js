import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"


const Blueprint = ({blueprint}) => {


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
        autoplay: false,
        speed: 500,
        nextArrow: <SampleNextArrow onClick={handleNextClick}/>,
        prevArrow: <SamplePrevArrow onClick={handlePrevClick} />,
        ref: sliderRef,
      };





    return(
        <ContainerBluePrint>
            <div className='title'>
                <BlockContent
                    blocks={blueprint._rawBlueprintSectionsTitle}
                />
            </div>
            <SliderContainer className="slider" {...settings}>
                {blueprint.blueprints.map((item) => {
                        const imageGetDataImage = getImage(item.blueprint && item.blueprint.asset)
                        const imageGetDataImageAlt = item.blueprint && item.blueprint.textoAlternativo
                    
                    return (
                        <li 
                            kay={item._key} 
                            className='item'
                        >
                            <h3>{item.title}</h3>
                            <div className='image'>
                                <GatsbyImage
                                    style={{ height: "100%", width: "100%" }}
                                    image={imageGetDataImage}
                                    alt={imageGetDataImageAlt}
                                />
                            </div>
                            <div className='data'>
                                <div className='item1'>
                                    <BlockContent
                                        blocks={item._rawInfo1}
                                    />
                                </div>
                                <div className='item2'>
                                    <BlockContent
                                        blocks={item._rawInfo2}
                                    />
                                </div>
                                <div className='item3'>
                                    <BlockContent
                                        blocks={item._rawInfo3}
                                    />
                                </div>

                            </div>
                        </li>
                    )
                })}
            </SliderContainer>
        </ContainerBluePrint>
    )
}

const ContainerBluePrint = styled.section`
margin-top: 150px;
text-align: center;
.title {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    p {
        text-transform: uppercase;
        font-size: 2rem;
        @media (max-width: 780px) {
            font-size: 1.2rem;
        }
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
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    width: 30px;
    height: 30px;
    border-radius: 50%;
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
}
button.slick-prev {
    left: 0;
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

.item {
    h3 {
        font-size: 1.2rem;
        margin-bottom: 30px;
        margin-top: 20px;
        @media (max-width: 780px) {
            font-size: 1rem;
        }
    }
    .data {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
        @media (max-width: 780px) {
            flex-direction: column;
            div {
                margin-bottom: 20px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        em {
            text-transform: uppercase;
        }
    }
}
`

export default Blueprint