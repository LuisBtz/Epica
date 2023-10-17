import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Location = ({location}) => {

    const locationGetDataImage = getImage(location.map && location.map.asset)
    const locationGetDataImageAlt = location.map && location.map.textoAlternativo
  
    return(
        <LocationContainer>
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
                    {location.sections.map(({ _kay, titleBigSection, list, color }) => {
                    return (
                        <li kay={_kay} className='item'><span className='color' style={{backgroundColor: `${color}`}} ></span> <h4>{titleBigSection}</h4> 
                        <button>
                            <div></div>
                            <div></div>
                        </button>
                            <ul>
                            {list.map((item) => {
                                return(
                                    <li>{item}</li>
                                )
                            })}
                            </ul>
                        </li>
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

.left {
    width: 40%;
    padding-right: 50px;
}

.der {
    width: 60%;
    .plazas {
        margin-top: 50px;
        position: relative;
        button {
            position: absolute;
            top: 10px;
            right: 0px;
            width: 15px;
            height: 15px;
            div {
                position: absolute;
                background-color: var(--black);
                &:first-child {
                    width: 15px;
                    height: 1px;
                    transform: translateY(-100%);
                    top: 50%;
                }
                &:nth-child(2) {
                    width: 1px;
                    height: 100%;
                    transform: translateX(-50%);
                    left: 50%;
                    top: 0;
                }
            }
        }
        li.item {
            border-bottom: solid 1px var(--black);
            position: relative;
            padding: 10px 0;
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
                margin-bottom: 20px;
            }
            ul {
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