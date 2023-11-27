import React from "react";
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';
import Item from "./Item";

const Location = ({location}) => {

    const locationGetDataImage = getImage(location.map && location.map.asset)
    const locationGetDataImageAlt = location.map && location.map.textoAlternativo
  



    return(
        <LocationContainer id='ubicacion'>
            <div className='left'>
                <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={locationGetDataImage}
                    alt={locationGetDataImageAlt}
                />
                </div>
            </div>
            <div className='der'>
                <div className='title'>
                    <BlockContent
                        blocks={location._rawLocationTitle}
                    />
                </div>
                <ul className='plazas'>
                    {location.sections.map((section) => {
                    return (
                        <Item section={section} />
                    )
                    })}
                </ul>
            </div>
        </LocationContainer>
    )
}

const LocationContainer = styled.section`

display: flex;
flex-direction: row;
width: 100%;
margin-top: 50px;
@media (max-width: 780px) {
    flex-direction: column;
}
.left {
    width: 40%;
    padding-right: 50px;
    @media (max-width: 1200px) {
        width: 60%;
        padding-right: 20px;
    }
    @media (max-width: 780px) {
        width: 100%;
    }
}

.der {
    width: 60%;
    @media (max-width: 1200px) {
        width: 40%;
    }
    @media (max-width: 780px) {
        margin-top: 50px;
        width: 100%;
    }
    .plazas {
        margin-top: 50px;
        position: relative;
        li.item.open {
            max-height: 500px;
        }
        li.item {
            border-bottom: solid 1px var(--black);
            position: relative;
            padding: 10px 0;
            display: block;
            max-height: 40px;
            overflow: hidden;
            transition: all 350ms ease-in-out;
            @media (max-width: 950px) {
                max-height: 55px;
            }
            span.color {
                display: block;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                float: left;
            }
            h4 {
                text-transform: uppercase;
                margin-left: 20px;
                padding-right: 20px;
            }
            ul {
                margin-top: 20px;
                @media (max-width: 950px) {
                    margin-top: 30px;
                }
                li {
                    margin-bottom: 10px;
                    font-size: 0.8rem;
                }
            }
        }
    }
}
`


export default Location