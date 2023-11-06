import React, { useState } from "react";
import styled from 'styled-components';




const Item = ({section}) => {


    const [li, showLi] = useState(false);



    return(
        <ItemContainer 
        kay={section._kay}
        className={ li ? 'item open' : 'item'}
        >
            <span className='color' style={{backgroundColor: `${section.color}`}} ></span> 
            <h4>{section.titleBigSection}</h4> 
            <button onClick={() => showLi(!li)} className={li ? 'clicked' : ''}>
                    <div></div>
                    <div></div>
            </button>
            <ul>
            {section.list.map((item) => {
                return(
                    <li>{item}</li>
                )
            })}
            </ul>
        </ItemContainer>
    )
}


const ItemContainer = styled.li`
.clicked {
    transform: rotate(90deg);
    div {
        &:nth-child(1) {
            opacity: 0;
        }
    }
}
button {
            position: absolute;
            top: 10px;
            right: 0px;
            width: 15px;
            height: 15px;
            transition: transform 350ms ease-in-out;
            div {
                position: absolute;
                background-color: var(--black);
                &:first-child {
                    width: 15px;
                    height: 1px;
                    transform: translateY(-100%);
                    top: 50%;
                    opacity: 1;
                    transition: opacity 100ms linear 100ms;
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
        
`


export default Item