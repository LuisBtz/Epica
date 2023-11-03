import React from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';


const Numbers = ({numbers}) => {
    return(
        <ContainerNumbers id='numeralia'>
            <div className='title'>
                <BlockContent
                    blocks={numbers._rawNumbersSectionsTitle}
                />
            </div>
            <ul className='items'>
                {numbers.numbers.map((item) => {                    
                        
                    return (
                        <li 
                            kay={item._key} 
                            className='item'
                        >
                            <h2>{item.number}</h2>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li> 
                    )
                })}
            </ul>
                
        </ContainerNumbers>
    )
}

const ContainerNumbers = styled.section`
    margin-top: 100px;
    .title {
        text-align: center;
        font-weight: lighter;
    }

    .items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin-top: 50px;
        @media (max-width: 920px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 650px) {
            grid-template-columns: repeat(1, 1fr);
        }
        .item {
            padding: 20px;
            background-color: white;
            border-radius: 0 0 60px 0;
            h2 {
                font-weight: lighter;
                font-size: 6rem;
                font-family: var(--light);
                margin-bottom: 50px;
            }
            h3 {
                font-size: 1rem;
                margin-bottom: 20px;
            }
            p {
                color: #ACA6A3;
            }
        }
    }
`

export default Numbers