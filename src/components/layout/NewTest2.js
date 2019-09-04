import React from 'react'
import styled from 'styled-components'
import Img from '../assets/bg-masthead.jpg'


const DivHead = styled.div`
display:block;
box-sizing:border-box;
padding-top: 10rem;
  padding-bottom: calc(10rem - 72px);
  background: -webkit-gradient(linear, left top, left bottom, from(rgba(92, 77, 66, 0.8)), to(rgba(92, 77, 66, 0.8))), url(${Img});
  background: linear-gradient(to bottom, rgba(92, 77, 66, 0.8) 0%, rgba(92, 77, 66, 0.8) 100%), url(${Img});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
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
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  height: 100% !important;
  align-items: center;
  justify-content: center;
  text-align: center !important;
  `  
const ColHead = styled.div`
position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  -webkit-box-flex: 0;
    -ms-flex: 0 0 83.33333%;
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
    -ms-flex-item-align: end !important;
  align-self: flex-end !important;
  `  
const H1Head = styled.h1`
text-transform: uppercase !important;
color: #fff !important;
font-weight: bold;
`  
const HrHead = styled.hr`
max-width: 3.25rem;
  border-width: 0.2rem;
  border-color: #c56cf0;
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
`


const NewTest2 = () => {
    return(
        <DivHead>
            <ContainerHead>
                <RowHead>
                    <ColHead>
                        <H1Head>Your Favorite Source of FREE Video Tutorials</H1Head>
                        <HrHead/>
                    </ColHead>
                </RowHead>
            </ContainerHead>
        </DivHead>
    )
}

export default NewTest2