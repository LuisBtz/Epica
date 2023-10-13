import React from 'react'
import styled from 'styled-components'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import BlockContent from '@sanity/block-content-to-react';

const Render = ({render}) => {

    const bgGetDataImage = getImage(render.renderImage && render.renderImage.asset)
    const bgGetDataImageAlt = render.renderImage && render.renderImage.textoAlternativo
  
    return(
        <RenderContainer>
            <div className="image">
              <GatsbyImage
                  style={{ height: "100%", width: "100%" }}
                  image={bgGetDataImage}
                  alt={bgGetDataImageAlt}
              />
            </div>
            <div className='texto'>
                <BlockContent
                            blocks={render._rawRenderText}
                    />

            </div>
        </RenderContainer>
    )
} 

const RenderContainer = styled.section`
width: 100%;
padding: 100px 50px;
position: relative;
    .image {
        width: 100%;
    }
    .texto {
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
        width: 1200px;
        z-index: 1;
        color: var(--white);
        text-align: center;
         margin: 0 auto;
        p {
            width: 700px;
            margin: 0 auto;
            line-height: 1.2;
        }
    }
`

export default Render