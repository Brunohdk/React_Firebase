import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinWink } from '@fortawesome/free-solid-svg-icons';


const TitleH1 = styled.h1`
font-size: 4rem;
font-weight:300;
line-height:1.2;
margin-bottom:20px;
`

const About = () => {
    return(
            <div className="container" id="aboutMe" >
                <div className="row" >
                    <div className="col-12 text-center my-5" >
                        <TitleH1>
                        <FontAwesomeIcon icon={faGrinWink} style={{color:'grey', marginRight:'10px'}}/>
                              Sobre mim...
                        </TitleH1>
                        <p style={{fontWeight:'370', fontSize:'17px', marginBottom:'40px', lineHeight:'1.4'}}>
                            Olá sou Bruno Hideki, 21 anos, cursando ADS (ead), e atualmente residindo em São Paulo/SP. 
                            Nunca trabalhei na área porém hoje meu objetivo é me inserir neste 
                            mercado que sempre gostei. Todo meu conhecimento em programação foi adquirido através
                             da internet(fóruns, vídeos, projetos, sites em geral...), não realizei nenhum curso 
                             presencial na área.
                        </p>
                        <p style={{fontWeight:'400', fontSize:'20px', marginBottom:'15px'}}>O objetivo deste site é facilitar a visualização dos projetos que estou criando e/ou usando para estudo.</p>
                    </div>
                </div>
            </div>
    )
}

export default About;