import React, { useState } from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import Render from "../components/render/Render";
import BlockContent from '@sanity/block-content-to-react';


export const data = graphql`
  query {
    sanityLandingPage {
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
        <header className={nav ? 'menu active' : 'menu'} onClick={() => showNav(!nav)}>
          <img src="/logo.svg" alt='Logo Epica'  className="logo" />
          <div className="mid">
            <a className="brochure" href='/brochure.pdf' download>descargar brochure</a>
            <ul className="menu">
              <li><a href='#concepto'>Concepto</a></li>
              <li><a href='#ubicacion'>Ubicación</a></li>
              <li><a href='#numeralia'>Numeralia</a></li>
              <li><a href='#amenidades'>Amenidades</a></li>
              <li><a href='#galeria'>Galería</a></li>
              <li><a href="contacto">Contacto</a></li>
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
        </header>
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


        {/* Render */}
        <Render render={data.sanityLandingPage.render} />




      </Main>

    </Layout>
  )
}

const Main = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  .active {
    left: 0px !important;
  }
  header.menu {
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
`

const Button = styled.button`
  display: flex;
  flex-direction: column;
  width: 150px;
  padding: 50px;
  border-right: solid 1px var(--brown);
  position: relative;
  .sticky {
    position: sticky;
    top: 50px;
    width: 100%;
    p {
      margin-top: 75vh;
    }
  }
`



export const Head = () => (
  <Seo title='EPICA75' description='Vive monumental' image='/screenshot.png' />
  )



  export default IndexPage