import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';


const Section1 = styled.section`
padding: 3rem 0;
background-color:#607BFF;
@media(min-width:576px){padding: 4rem 0;}
@media(min-width:768px){padding:6rem 0};
@media(min-width:992px){padding:7rem 0;};
@media(min-width:1200px){padding:8rem 0};
`
const Section1div = styled.div`
width: 100%;
height: 100% !important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media(min-width:576px){max-width:540px;};
  @media(min-width:768px){max-width:720px;};
  @media(min-width:992px){max-width:960px;};
  @media(min-width:1200px){max-width:1140px;};
  `
const Section1Row = styled.div`
-webkit-box-pack: center !important;
-ms-flex-pack: center !important;
justify-content: center !important;
display: flex;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;
`  
const Section1Text = styled.div`
text-align:center !important;
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px){
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
}
`
const Section1H2 = styled.h2`
color:white !important;
margin-top:0 !important;
font-size:2rem;
margin-bottom:0.5rem;
font-weight:500;
line-height:1.2;
@media(min-width:992px){font-size:2.5rem;};
@media(min-width:1200px){font-size:3rem};
`
const Section1Hr = styled.hr`
border-color:white;
max-width:3.8rem;
border-width:0.3rem;
margin-bottom:1.5rem !important;
margin-top:1.5rem !important;
margin: 0 auto;
`
const Section1P = styled.p`
color: rgba(255, 255, 255, 0.7) !important;
font-size:1.4rem;
margin-bottom: 4rem !important;
`
const Section1Button1 = styled.button`
cursor: help !important;
outline: none !important;
padding:1.4rem 1.6rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
    color:black;
    background-color:#f8f9fa;
    letter-spacing: 0.5px;
    transition: all 0.3s ease 0s;
    &:hover{
        border: 5px solid #2038A0;
border-radius: 1px;
transition: all 0.3s ease 0s;
    };
@media(min-width:768px){padding:1.6rem 2.3rem;};
@media(min-width:1200px){padding:1.75rem 3rem;};
`
const Section1Button2 = styled.button`
outline: none !important;
cursor: help !important;
padding:1.4rem 1.6rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
    color:black;
    background-color:#f8f9fa;
    letter-spacing: 0.5px; 
    transition: all 0.3s ease 0s;
    &:hover{
        color: #fff !important;
font-weight: 700 !important;
letter-spacing: 3px;
background: none;
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.3s ease 0s;
}
@media(min-width:768px){padding:1.6rem 2.3rem;};
@media(min-width:1200px){padding:1.75rem 3rem;};
`
const Section1Button3 = styled.button`
cursor: help !important;
outline: none !important;
padding:1.4rem 1.6rem;
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
    color:black;
    background-color:#f8f9fa;
    letter-spacing: 0.5px;
    transition: all 0.4s ease 0s;
    &:hover{
        color:white;
        background-color:black;
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
}
@media(min-width:768px){padding:1.6rem 2.3rem;};
@media(min-width:1200px){padding:1.75rem 3rem;};
`


const Debaixo2 = () => {
    return(
        <Section1 id="select">
            <Section1div >
                <Section1Row>
                    <Section1Text>
                        <Section1H2>
                            Qual nível você se considera ? 
                        </Section1H2>
                        <Section1Hr/>
                        <Section1P>Temos tutoriais de acordo com o seu nível!</Section1P>
                        <div style={{justifyContent: 'space-around', display:'flex'}}>
                        <Link activeClass="active"
                          to="iniciantes"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
                              <Section1Button1>Iniciante</Section1Button1>
                        </Link>
                        <Link activeClass="active"
                          to="medianos"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
                              <Section1Button2>Mediano</Section1Button2>
                          </Link>
                          <Link activeClass="active"
                          to="avancados"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
                              <Section1Button3>Avançado</Section1Button3>
                            </Link>
                        </div>
                    </Section1Text>
                </Section1Row>
            </Section1div>
        </Section1>
    )
}

export default Debaixo2