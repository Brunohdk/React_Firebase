import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import {faWhatsapp, faInstagram, faGithubSquare, faLinkedin, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';


const TitleH1 = styled.h1`
font-size: 4rem;
font-weight:300;
line-height:1.2;
margin-bottom:0.9rem;
`

const WhatsButton = styled.button`
border: 1px solid green;
background-color:#FFFF;
padding: 50px;
border-radius:3px;
`

const Contact = () => {
    return(
        <div style={{backgroundColor:'#c4c4c4', padding:'3.5rem 0'}}>

        <div className="container" style={{backgroundColor:'#e6e6e6', borderRadius:'8px'}}>
            <div className="row">
                <div className="col-12 text-center my-2">
                    <TitleH1>
                        <FontAwesomeIcon icon={faEnvelopeOpen}
                         style={{color:'grey', marginRight:'10px'}}/>
                    Contato</TitleH1>
                    <p style={{marginBottom:'1.2rem'}}>Me envie uma mensagem no WhatsApp <FontAwesomeIcon icon={faMobileAlt} /></p>
                    <a href="https://api.whatsapp.com/send?phone=5513997137180&text=&source=&data=">
                        <WhatsButton>
                            <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:'8rem', color:'green'}} />
                        </WhatsButton>
                    </a>
                    <h2 style={{margin:'1.7rem 0rem', fontSize:'30px', fontWeight:'400'}}>
                        Demais redes sociais</h2>
                    <a href="https://www.linkedin.com/in/bruno-hideki-2a2791184/">
                        <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'4rem', margin:'0 1.2rem', color:'#36a1e8'}} />
                    </a>
                    <a href="https://github.com/Brunohdk">
                    <FontAwesomeIcon icon={faGithubSquare} style={{fontSize:'4rem', margin:'0 1.2rem', color:'black'}} />
                    </a>
                    <a href="https://www.instagram.com/bruhideki/">
                    <FontAwesomeIcon icon={faInstagram} style={{fontSize:'3.75rem', margin:'0 1.2rem', padding:'0 2.5px',
                    borderRadius:'5px', color:'white', background: '-webkit-linear-gradient(#5851DB, #E1306C)', WebkitTextFillColor:'transparent'}} />
                    </a>
                    <a href="https://www.facebook.com/bhideki3">
                    <FontAwesomeIcon icon={faFacebookSquare} style={{fontSize:'4rem', margin:'0 1.2rem'}} />
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact