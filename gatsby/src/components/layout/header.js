import React from "react"
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';


const Header = () => {




    const data = useStaticQuery(graphql`
    query {
        sanityLandingPage {
            hero {
                _rawSlogan
                heroBackground {
                    asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                    )
                    }
                    textoAlternativo
                }
            
            }
            whiteIcon {
                textoAlternativo
                asset {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: BLURRED
                    )
                }
            }
            logo {
                textoAlternativo
                asset {
                    gatsbyImageData(
                        layout: FULL_WIDTH
                        outputPixelDensities: 1.5
                        placeholder: BLURRED
                    )
                }
            }
        }
    }
    `);



const bgGetDataImage = getImage(data.sanityLandingPage.hero.heroBackground && data.sanityLandingPage.hero.heroBackground.asset)
const bgGetDataImageAlt = data.sanityLandingPage.hero.heroBackground && data.sanityLandingPage.hero.heroBackground.textoAlternativo

const iconGetDataImage = getImage(data.sanityLandingPage.whiteIcon && data.sanityLandingPage.whiteIcon.asset)
const iconGetDataImageAlt = data.sanityLandingPage.whiteIcon && data.sanityLandingPage.whiteIcon.textoAlternativo

const logoGetDataImage = getImage(data.sanityLandingPage.logo && data.sanityLandingPage.logo.asset)
const logoGetDataImageAlt = data.sanityLandingPage.logo && data.sanityLandingPage.logo.textoAlternativo



    return(
        <HeaderContainer>
            <div className="icon-hero">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={iconGetDataImage}
                        alt={iconGetDataImageAlt}
                    />
                </div>
            </div>
            <div className="building">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={bgGetDataImage}
                        alt={bgGetDataImageAlt}
                    />
                </div>
            </div>
            <div className="texto">
                <BlockContent
                        blocks={data.sanityLandingPage.hero._rawSlogan}
                />
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    />
                </div>
            </div>
            
        </HeaderContainer>
    )
}

const HeaderContainer = styled.nav`
    background-color: var(--brown);
    height: 100vh;
    position: relative;
    @media (max-width: 680px) {
        height: 80vh;
    }
    .icon-hero {
        position: absolute;
        top: 50px;
        left: 50px;
        z-index: 1;
        width: 50px;
        height: 50px;
    }
    .building {
        height: 100vh;
        width: 100vw;
        border-radius: 0% 65% 0% 0% / 10% 89% 0% 10%;
        overflow: hidden;
        @media (max-width: 680px) {
            border-radius: 0% 30% 0% 0% / 10% 22% 10% 10% ;
            height: 80vh;
        }
        .image {
            height: 100%;
        }
    }
    .texto {
        position: absolute;
        bottom: 0;
        z-index: 1;
        padding: 50px;
        width: 100%;
        .image {
            width: 100%;
        }
        h1 {
            font-size: 2rem;
            color: var(--white);
            margin-bottom: 30px;
            @media (max-width: 680px) {
                font-size: 1.5rem;
                margin-bottom: 10px;
            }
        }
    }
`

export default Header