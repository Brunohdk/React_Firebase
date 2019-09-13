import React from 'react'
import styled from 'styled-components'
import CardDatas from '../contents/datas/AllDatas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrog } from '@fortawesome/free-solid-svg-icons';


const Card = styled.div`
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
    Button{
        color:white;
        border-radius:0px;
        font-size:0.78rem;
        font-weight:600;
        @media(min-width:768px){font-size:0.74rem;};
        @media(min-width:992px){font-size:0.95rem;};
        @media(min-width:1200px){font-size:1.1rem;};
    }
`;

const Button1 = styled.button`
outline: none !important;
color:white;
font-size:0.78rem;
font-weight:500;
padding:13px;
width:100%;
background-color:#696969;
margin-top:2.5rem;
@media(min-width:768px){font-size:0.74rem;};
@media(min-width:992px){font-size:0.95rem;};
@media(min-width:1200px){font-size:1.1rem;};
border:none;
text-transform: uppercase;
text-decoration: none;
transition: all 0.4s ease 0s;
p { 
    text-shadow:none;
    animation: typing 4s steps(12) infinite;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
        animation: blink 0.3s infinite;
    }
}
@keyframes typing {
	0% {
		width: 0;
	}
	50% {
		width: 100%;
	}
	55%,
	65%,
	75% {
		opacity: 1;
	}
	60%,
	70% {
		opacity: 0;
	}
	80% {
		width: 100%;
	}
	100% {
		width: 0;
	}
}
`
const Button2 = styled.button`
outline: none !important;
width:100%;
color:white;
font-size:0.78rem;
font-weight:500;
padding:13px;
text-transform:uppercase;
@media(min-width:768px){font-size:0.74rem;};
@media(min-width:992px){font-size:0.95rem;};
@media(min-width:1200px){font-size:1.1rem;};
border:none;
        background-color:black;
        text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
transition: all 0.4s ease 0s;
    &:hover{
        text-shadow:none;
    }
`

const CardHeader = styled.div`
    text-align: center;
    padding: 0.75rem 1.25rem;
    margin-bottom:0;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    h5{font-size:1.6rem;
        font-weight:580;
    @media(min-width:768px){font-size:1.75rem};
    @media(min-width:992px){font-size:1.8rem};
    @media(min-width:1200px){font-size:1.9rem};};
`;

const CardImg = styled.img`
    width:100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    vertical-align: middle;
    border-style: none;
`

const CardBody = styled.div`
    flex: 1 1 auto;
    padding: 1.0rem 1.25rem 0 1.25rem;
    h5{
        font-size:1.3rem;
        @media(min-width:768px){font-size:1.13rem;};
        @media(min-width:992px){font-size:1.4rem;};
        @media(min-width:1200px){font-size:1.45rem;};
    }
    h6{
        color:#6c757d;
        padding-bottom:0.65rem;
        font-size:0.8rem;
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

const CardUl = styled.ul`
    text-align: center;
    display: flex;
    flex-direction: row;
    list-style-type: disc;
    justify-content:center;
`

const CardLi = styled.li`
justify-content:space-around;
display: flex;
margin-top:1rem;
padding-bottom:0.1rem;
width:100%;
background-color: #fff;
button{
    font-weight:530;
    color:white;
    font-size:0.78rem;
        font-weight:600;
        @media(min-width:768px){font-size:0.74rem;};
        @media(min-width:992px){font-size:0.95rem;};
        @media(min-width:1200px){font-size:1.1rem;};
    &:hover{
        outline:none;
    }
}
`

const MediasQ = styled.div`
@media (min-width: 768px){
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
};
@media (min-width: 576px){
    flex: 0 0 50%;
    max-width: 50%;
};
flex: 0 0 50%;
max-width: 50%;    
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
display: block;
box-sizing: border-box;
`


const DescH1 = styled.h2`
font-size:3.5rem;
line-height:1.2;

@media(min-width:768px){font-size:4rem};
@media(min-width:992px){font-size:4.5rem};
    i{

    }
    p{
        margin: 10px 0px;
        font-size:1rem;
        font-weight:350;
        line-height:1.45;
        @media (min-width:576px){font-size:1.2rem;}
        @media (min-width:768px){font-size:1.2rem;}
        @media (min-width:992px){font-size:1.3rem;}
    }
`

const DivInside = styled.div`
justify-content:center;
box-sizing:border-box;
display:flex;
@media(min-width:576px){padding:0px 5px};
@media(min-width:992px){padding:0px 15px};
`

const Links = styled.a`
outline:none;
color:white;
&:hover{
    color:white;
}`

const dashRow = () => {

    return(
    <div className="row">
        <div style={{flex:'0 0 100%', width:'99%', marginTop:'4.5rem', boxSizing:'border-box'}}>
            <hr></hr>
        </div>
                <DivInside className="row">
                    <div className="col-12" style={{textAlign:'center', flex:'0 0 100%', width:'99%'}}>
                        <DescH1>
                        <FontAwesomeIcon icon={faFrog}/> Projetos
                        <p>Todos os projetos desta lista estão disponíveis em github.com/brunohdk. Nesta lista contém vários tipos de projetos, desde os criados 100% por mim, até alguns criados em projetos compartilhados, outros acompanhando cursos com modificações, etc..</p>
                        </DescH1>
                    </div>
                    {CardDatas.map(art => {
                        return(
                        <div className="col-sm-6 col-md-4 col-6">
                        <Card>
                            <CardHeader>
                                <h5>{art.title}</h5>
                            </CardHeader>
                            <CardImg src={art.image} alt={art.image}/>
                            <CardBody>
                                <h5>{art.desc}</h5>
                                <h6>{art.subtitle}</h6>
                                <p>{art.content}</p>
                            </CardBody>
                            <Links href={art.linktest}><Button1><p>Teste o sistema</p></Button1></Links>
                            <Links href={art.linktest}><Button2>Visite o código</Button2></Links>
                        </Card>
                    </div>
                        )
                    })}    
                    </DivInside>
    </div>
    )
}

export default dashRow