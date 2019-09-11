import React from 'react';
import styled from 'styled-components';
import IniCards from '../contents/datas/avancadosData.js';


const Ini = styled.div`
justify-content:center;
box-sizing:border-box;
display:flex;
@media(min-width:576px){padding:0px 5px};
@media(min-width:992px){padding:0px 15px};
`
const IniDesc = styled.h2`
font-size:3.5rem;
line-height:1.2;
color:white;

@media(min-width:768px){font-size:4rem};
@media(min-width:992px){font-size:4.5rem};
`
const IniCard = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    background-color: white;
    border: 1px solid rgba(0,0,0,0.125);
    border-radius: 0.70rem;
    justify-content:center;
    margin-bottom:0.5rem;
    margin-top:0.5rem;
`;
const IniCardHeader = styled.div`
    text-align: center;
    padding: 0.75rem 1.25rem;
    margin-bottom:0;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    h5{font-size:1.6rem;
        font-weight:500;
    @media(min-width:768px){font-size:1.75rem};
    @media(min-width:992px){font-size:1.8rem};
    @media(min-width:1200px){font-size:1.9rem};};
`;
const IniCardImg = styled.img`
    width:100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    vertical-align: middle;
    border-style: none;
`
const IniCardBody = styled.div`
    flex: 1 1 auto;
    padding: 1.0rem 1.25rem 0 1.25rem;
    color:black;
    margin-bottom:2.5rem;

    h5{
        font-size:1.3rem;
        @media(min-width:768px){font-size:1.13rem;};
        @media(min-width:992px){font-size:1.4rem;};
        @media(min-width:1200px){font-size:1.45rem;};
    }
    h6{
        color:#6c757d;
        padding-bottom:0.65rem;
        font-size:1rem;
        @media(min-width:768px){font-size:0.9rem;};
        @media(min-width:992px){font-size:1rem;};
        @media(min-width:1200px){font-size:1.05rem;};
    }
    p{
        font-weight:400;
        font-size:0.95rem;
        line-height:1.28;
        @media(min-width:992px){font-size:1rem;};
    }
`
const IniButton1 = styled.button`
outline: none !important;
font-size:0.78rem;
font-weight:500;
padding:13px;
margin: 0 -1px;
border:1px solid #696969;
text-transform:uppercase;
width:100%;
background-color:#696969;
color:white;
        @media(min-width:768px){font-size:0.67rem;};
        @media(min-width:992px){font-size:0.95rem;};
        @media(min-width:1200px){font-size:1.1rem;};
        &:hover{
            background-color:white;
            color:black;
            border:3px solid
        }
`
const IniButton2 = styled.button`
outline: none !important;
color:white;
font-size:0.78rem;
font-weight:500;
width:100%;
text-transform:uppercase;
padding:13px;
margin: -1px;
border:3px solid #ffff;
        @media(min-width:768px){font-size:0.67rem;};
        @media(min-width:992px){font-size:0.95rem;};
        @media(min-width:1200px){font-size:1.1rem;};
background-color:black;
text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
    &:hover{
        text-shadow:none;
    }
`
const IniLinks = styled.a`
outline:none;
color:white;
margin-right:-2px;
&:hover{
    color:black;
    outline:none;
}`


const Avancados = () => {
    return(
    <div style={{backgroundColor:'black', padding:'3.5rem 0'}} id="avancados">
        <Ini className=" container row">
            <div className="col-12" style={{textAlign:'center', flex:'0 0 100%', width:'99%'}}>
                <IniDesc>
                <i className="fa fa-apple"></i> Avançados
                </IniDesc>
            </div>
            {IniCards.map(ini => {
                return(
                    <div className="col-sm-6 col-md-4 col-6">
                        <IniCard>
                            <IniCardHeader>
                                <h5>{ini.title}</h5>
                            </IniCardHeader>
                            <IniCardImg src={ini.image} alt={ini.image}/>
                            <IniCardBody>
                                <h5>{ini.desc}</h5>
                                <h6>{ini.subtitle}</h6>
                                <p>{ini.content}</p>
                            </IniCardBody>
                            <IniLinks href={ini.linktest}><IniButton1>Teste o sistema</IniButton1></IniLinks>
                            <IniLinks href={ini.linkcode}><IniButton2>Visite o código</IniButton2></IniLinks>
                        </IniCard>
                    </div>
                )
            })}
        </Ini>
    </div>
    )
}

export default Avancados