import React, { useState } from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import Render from "../components/render/Render";
import BlockContent from '@sanity/block-content-to-react';
import Location from "../components/Location/Location";
import Lujos from "../components/Lujos/Lujos";
import Gallery from "../components/Gallery/Gallery";
import Numbers from "../components/Numbers/Numbers";
import Blueprint from "../components/Blueprint/Blueprint";
import Contacto from "../components/Contact/Contact";


export const data = graphql`
  query {
    sanityLandingPage {
      brochure {
        asset {
          url
        }
      }
      _rawAddress
        socialMedia {
        title
        link
        icon {
          textoAlternativo
          asset {
            url
          }
        }
      }
      brownIcon {
        textoAlternativo
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }


## Render
      render {
        _rawRenderText
        renderImage {
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


      ## Location
      location {
        locationLink
        map {
          textoAlternativo
          asset {
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
            )
          }
        }
        _rawLocationTitle
        sections {
          _key
          titleBigSection
          list
          color
        }
      }

      ## Slider Lujos
      slider {
      _rawSliderTitle
      carrusel {
        _key
        itemName
        description
        icon {
          textoAlternativo
          asset {
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
            )
          }
        }
        image {
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


    ## Gallery

    gallery {
      _rawGalleryTitle
      galleryDescription
      galleryMainImage {
        textoAlternativo
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            outputPixelDensities: 1.5
            placeholder: BLURRED
          )
        }
      }
      gallery {
        _key
        itemName
        description
        image {
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




    ## Numbers

    numbers {
      _rawNumbersSectionsTitle
      numbers {
        _key
        number
        title
        description
      }
    }



    ## Blueprint 

    blueprint {
      _rawBlueprintSectionsTitle
      blueprints {
        _key
        title
        blueprint {
          textoAlternativo
          asset {
            gatsbyImageData(
              layout: FULL_WIDTH
              outputPixelDensities: 1.5
              placeholder: BLURRED
            )
          }
        }
        _rawInfo1
        _rawInfo2
        _rawInfo3
      }
    }


    ## Contact

    contact {
      _rawContactSectionsTitle
      description
      buttonText
      formTitle
      descriptionForm
    }




    }
  }
`;







const IndexPage = ({data}) => {

  const iconGetDataImage = getImage(data.sanityLandingPage.brownIcon && data.sanityLandingPage.brownIcon.asset)
  const iconGetDataImageAlt = data.sanityLandingPage.brownIcon && data.sanityLandingPage.brownIcon.textoAlternativo


  const [nav, showNav] = useState(false);


  return (
    <Layout >
      <Main className="main">
        <button className={nav ? 'menu active' : 'menu'} onClick={() => showNav(!nav)}>
          <img src="/logo.svg" alt='Logo Epica'  className="logo" />
          <div className="mid">
            <a className="brochure" target='_blank' href={data.sanityLandingPage.brochure.asset.url} download>descargar brochure</a>
            <ul className="menu">
              <li><a href='#concepto'>Concepto</a></li>
              <li><a href='#ubicacion'>Ubicación</a></li>
              <li><a href='#amenidades'>Amenidades</a></li>
              <li><a href='#galeria'>Galería</a></li>
              <li><a href='#numeralia'>Numeralia</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>

          </div>
          <div className="bottom">
            <div className="address">
              <BlockContent
                blocks={data.sanityLandingPage._rawAddress}
              />
            </div>
            <div className="social">
              <ul>
                {data.sanityLandingPage.socialMedia.map(({ title, link, icon }) => {
                  return (
                      <li><a target='_blank' rel="noreferrer" href={link}><img src={icon.asset.url} alt={title} /></a></li>
                  )
                })}
              </ul>
            </div>
          </div>
        </button>
        <Button onClick={() => showNav(!nav)}>
          <div className="sticky">
            <div className="image">
                <GatsbyImage
                    style={{ height: "100%", width: "100%" }}
                    image={iconGetDataImage}
                    alt={iconGetDataImageAlt}
                />
            </div>
            <p>MENU</p>
          </div>
          
        </Button>
        <button className={nav ? 'overlay active' : 'overlay'} onClick={() => showNav(!nav)}>
                
        </button>
        <div className="sections">

        {/* Render */}
        <Render render={data.sanityLandingPage.render} />


        {/* Location */}
        <Location location={data.sanityLandingPage.location} />



        {/* Lujos */}
        <Lujos slider={data.sanityLandingPage.slider} />

        {/* Gallery */}

        <Gallery gallery={data.sanityLandingPage.gallery} />

        {/* Numbers */}

        <Numbers numbers={data.sanityLandingPage.numbers} />

        {/* Blueprint */}

        <Blueprint blueprint={data.sanityLandingPage.blueprint} />


        {/* Contacto */}

        <Contacto contact={data.sanityLandingPage.contact} />

        </div>





      </Main>

    </Layout>
  )
}

const Main = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  .overlay {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100vh;
    width: calc(100vw - 350px);
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 5;
    opacity: 0;
    transition: opacity 350ms ease-in-out 350ms;
  }
  .overlay.active {
    right: 0;
    opacity: 1;
  }
  button.menu.active {
    left: 0px !important;
  }
  button.menu {
    position: fixed;
    top: 0;
    transition: all 350ms ease-in-out;
    left: -350px;
    width: 350px;
    height: 100vh;
    z-index: 50;
    background-color: var(--white);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    .logo {
      margin-bottom: 50px;
    }
    .mid {
      width: 100%;
      a {
        color: var(--black);
      }
      .brochure {
        text-transform: uppercase;
        text-align: center;
        display: block;
        width: 100%;
        padding: 10px;
        background-color: var(--black);
        color: var(--white);
      }
      ul {
        margin-top: 20px;
        margin-bottom: 20px;
        li {
          border-top: solid 1px var(--black);
          text-transform: uppercase;
          padding-top: 10px;
          padding-bottom: 10px;
        }
      }
    }
    .bottom {
      text-align: left;
      p {
        width: 70%;
      }
      .social {
        ul {
          display: flex;
          margin-top: 30px;
          li {
            display: block;
            width: 30px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .sections {
    padding: 100px 50px;
    display: flex;
    flex-direction: column;
    width: calc(100% - 144px);
      @media (max-width: 780px) {
        padding: 100px 20px;
        width: calc(100% - 100px);
    }
  }

`


const Button = styled.button`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 50px;
  border-right: solid 1px var(--brown);
  position: relative;
  @media (max-width: 780px) {
        width: 100px;
        padding: 20px;
    }
  .sticky {
    position: sticky;
    top: 50px;
    width: 100%;
    p {
      margin-top: 75vh;
      color: var(--black);
    }
    @media (max-width: 780px) {
        .image {
          width: 70%;
          margin: 0 auto;
        }
    }
  }
`



export const Head = () => (
  <Seo title='EPICA75' description='Vive monumental' image='/screenshot.png' />
  )



  export default IndexPage