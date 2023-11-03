import React, { useState } from "react";
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Contacto = ({contact}) => {

    const [slider, showSlider] = useState(false);


    return(
        <ContainerContacto>
            <div className='title'>
                <BlockContent
                    blocks={contact._rawContactSectionsTitle}
                />
            </div>
            <div className='data'>
                <p>{contact.description}</p>
                <button onClick={() => showSlider(!slider)} >contáctanos</button>
            </div>
            <div className={slider ? 'overlayForm active' : 'overlayForm'}>
                <button onClick={() => showSlider(!slider)} className="close"><img src="/x.png" alt='Close button' /></button>
                <div className='formulario'>
                    <h2>{contact.formTitle}</h2>
                    <p>{contact.descriptionForm}</p>
                    <form name='Formulario Contacto'
                            method="POST"
                            data-netlify="true"
                        >
                            <input type="hidden" name="form-name" value="Formulario Contacto"></input>
                            <input placeholder="Nombre" type='text' name='nombre' />
                            <input placeholder="Correo electrónico" type='mail' name='mail' />
                            <div className='split'>
                                <input placeholder="Teléfono" type='text' name='tel' />
                                <input placeholder="Ciudad/Estado" type='text' name='ciudad' />
                            </div>
                            <textarea type='text' name='message' placeholder='Mensaje' ></textarea>
                            <div className='send'>
                                <button type='submit'>Enviar</button>
                            </div>
                        </form>
                </div>
            </div>
        </ContainerContacto>
    )
}

const ContainerContacto = styled.section`
        padding: 50px;
        background-color: var(--black);
        color: var(--white);
        text-align: center;

    .title {
        margin-bottom: 30px;
        h3 {
            font-size: 1.2rem;
        }
    }
    .data {
        max-width: 700px;
        margin: 0 auto;
        button {
            margin-top: 30px;
            background-color: var(--white);
            padding: 7px 10px;
            text-transform: uppercase;
            border-radius: 3px;
            color: var(--black);
        }
    }
    .active {
        display: block !important;
    }
    .overlayForm {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
        .close {
            position: absolute;
            width: 50px;
            height: 50px;
            top: 20px;
            right: 20px;
            z-index: 22;
            img {
                width: 100%;
            }
        }
        .formulario {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            color: var(--black);
            padding: 30px;
            h2 {
                font-size: 1.5rem;
                margin-bottom: 20px;
            }
            p {
                margin-bottom: 30px;
            }
            form {
                input, textarea {
                    display: block;
                    width: 100%;
                    padding: 10px;
                    background-color: #ACA6A3;
                    color: var(--white);
                    border: none;
                    margin-bottom: 10px;
                    border-radius: 3px;
                    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: var(--white);
                        font-family: var(--light);
                    }

                    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
                        color: var(--white);
                    }

                    &::-ms-input-placeholder { /* Microsoft Edge */
                        color: var(--white);
                    }
                }
                .send {
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    button {
                        display: inline;
                        padding: 10px;
                        width: 250px;
                        background-color: #463436;
                        color: var(--white);
                        text-transform: uppercase;
                    }
                }
                
                textarea {
                    height: 100px;
                }
                .split {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-gap: 10px;
                    @media (max-width: 750px) {
                        grid-template-columns: repeat(1, 1fr);
                    }
                }
            }
        }
    }
`

export default Contacto