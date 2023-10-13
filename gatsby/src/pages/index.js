import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo';
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components";
import Render from "../components/render/Render";


export const data = graphql`
  query {
    sanityLandingPage {
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


  return (
    <Layout >
      <Main className="main">
        <Aside>
          <div className="image">
              <GatsbyImage
                  style={{ height: "100%", width: "100%" }}
                  image={iconGetDataImage}
                  alt={iconGetDataImageAlt}
              />
          </div>
        </Aside>


        {/* Render */}
        <Render render={data.sanityLandingPage.render} />




      </Main>

    </Layout>
  )
}

const Main = styled.div`
  display: flex;
  position: relative;
`

const Aside = styled.aside`
  width: 150px;
  padding: 50px;
  border-right: solid 1px var(--brown);
  position: sticky;
  top: 0;
`



export const Head = () => (
  <Seo title='EPICA75' description='Vive monumental' image='/screenshot.png' />
  )



  export default IndexPage