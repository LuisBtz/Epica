import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BlockContent from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Footer = () => {

    const data = useStaticQuery(graphql`
    query {
        sanityLandingPage {
            _rawAddress
            tel
            mail
            socialMedia {
                _key
                title
                link
                iconWhite {
                    textoAlternativo
                    asset {
                        url
                    }
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


const logoGetDataImage = getImage(data.sanityLandingPage.logo && data.sanityLandingPage.logo.asset)
const logoGetDataImageAlt = data.sanityLandingPage.logo && data.sanityLandingPage.logo.textoAlternativo



    return(
        <FooterContainer>
            <h3>Contacto</h3>
            <div className="tres">
                <div className="item direccion">
                    <BlockContent
                        blocks={data.sanityLandingPage._rawAddress}
                    />
                </div>
                <div className="item">
                    <em>{data.sanityLandingPage.tel}</em>
                    <p>{data.sanityLandingPage.mail}</p>
                </div>
                <ul className="item social">
                    {data.sanityLandingPage.socialMedia.map(({ title, link, iconWhite }) => {
                    return (
                        <li><a target='_blank' rel="noreferrer" href={link}><img src={iconWhite.asset.url} alt={title} />{title}</a></li>
                    )
                    })}
                </ul>
            </div>
            <div className="logo">
                <div className="image">
                    <GatsbyImage
                        style={{ height: "100%", width: "100%" }}
                        image={logoGetDataImage}
                        alt={logoGetDataImageAlt}
                    />
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
background-color: var(--black);
color: var(--white);
padding: 100px 50px;
h3 {
    font-size: 1rem;
    margin-bottom: 50px;
}

.tres {
    max-width: 800px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    @media (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
    .social {
        li a {
            display: flex;
            margin-bottom: 5px;
            img {
                width: 14px;
                margin-right: 5px;
            }
        }
    }
}

.logo {
    margin-top: 50px;
}
`

export default Footer