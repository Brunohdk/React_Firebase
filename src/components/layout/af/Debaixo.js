import React from 'react';
import styled from 'styled-components';
import Img from '../../assets/bg-masthead.jpg';
import {Link} from 'react-scroll'

const DivHead = styled.div`
display:block;
box-sizing:border-box;
padding-top: 10rem;
height:70vw;
  padding-bottom: calc(10rem - 72px);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(92, 77, 66, 0.8)), to(rgba(92, 77, 66, 0.8))), url(${Img});
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  @media(min-width:200px){height:105vw;};
  @media(min-width:576px){height:110vw;};
  @media(min-width:768px){height:65vw};
  @media(min-width:992px){height: 100vh;
    min-height: 40rem;
    padding-top: 72px;
    padding-bottom: 0;};
    `
const ContainerHead = styled.div`
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
const RowHead = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  margin-top:-60px;
  height: 100% !important;
  align-items: center !important;
  justify-content: center !important;
  -webkit-box-pack: center !important;
  -webkit-box-align: center !important;
  text-align: center !important;
  `  
const ColHead = styled.div`
position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  align-self: center !important;
  @media (min-width: 992px){
    -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
}
  `  
const H1Head = styled.h1`
text-transform: uppercase !important;
color: #fff !important;
font-weight: 580;
font-size:3.1rem;
margin-bottom: 0.5rem;
line-height: 1.2;
margin-block-start: 0.67em;
margin-block-end: 0.67em;
margin-inline-start: 0px;
margin-inline-end: 0px;
@media(min-width:992px){font-size:3.8rem;};
@media(min-width:1200px){font-size:4rem;};
@media(min-width:1500px){font-size:4.6rem;};

`  
const HrHead = styled.hr`
max-width: 4rem;
  border-width: 0.3rem;
  border-color: #607BFF;
  margin-top: -2rem !important;
  margin-bottom: 1.5rem !important;
  margin: 0 auto;
  @media(max-width:992px){margin-top:-1rem !important};
`
const ColHead2 = styled.div`
-ms-flex-item-align: baseline !important;
align-self: baseline !important;
position: relative;
width: 100%;
justify-content:center;
right:-148px;
padding-right: 15px;
padding-left: 15px;
@media(max-width:1200px){right:-124px;}
@media(max-width:992px){right: -0.5px;}
@media (min-width: 992px){
    -webkit-box-flex: 0;
    -ms-flex: 0 0 66.66667%;
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  };
`
const Head2P = styled.p`
color:rgba(255, 255, 255, 0.75);
font-weight: 300 !important;
margin-bottom: 3rem !important;
@media(max-width:992px){font-size:1.25rem;};
@media (min-width: 992px){font-size: 1.5rem;};
`
const HeadButton = styled.button`
outline: none !important;
padding: 1.35rem 3rem;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    border-radius: 10rem;
    color:white;
    background-color:#607BFF;
    letter-spacing: 1px;
    animation: shadow-pulse 1.3s infinite;
    @keyframes shadow-pulse
{
  0% {
    box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.7);
  }
  100% {
    box-shadow: 0 0 0 35px rgba(0, 0, 0, 0);
  }
}
&:hover{
  animation:none;
}
`


const DeBaixo = () => {
    return(
        <DivHead id="home">
            <ContainerHead>
                <RowHead>
                    <ColHead>
                        <H1Head>Seu Lugar Preferido de Tutoriais Grátis</H1Head>
                        <HrHead/>
                    <ColHead2>
                        <Head2P>Aprenda passo a passo cada projeto, do básico ao avançado!</Head2P>
                        <Link activeClass="active"
                          to="select"
                          spy={true}
                          smooth={true}
                          hashSpy={true}
                          offset={50}
                          duration={600}
                          delay={300}
                          isDynamic={true}
                          ignoreCancelEvents={false}>
                        <HeadButton>Venha!</HeadButton>
                        </Link>
                    </ColHead2>
                    </ColHead>
                </RowHead>
            </ContainerHead>
        </DivHead>
    )
}

export default DeBaixo