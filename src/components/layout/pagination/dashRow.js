import React from 'react'
import DashCards from './dashCards'
import styled from 'styled-components'
import CardDatas from './fake-data'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

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
`;

const CardHeader = styled.div`
    text-align: center;
    padding: 0.75rem 1.25rem;
    margin-bottom:0;
    background-color: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.125);
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
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
padding: 0.3rem 0rem;
width:100%;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.125);
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

const dashRow = () => {

    return(
    <div className="row" style={{overflow:'scroll'}}>
        <div style={{flex:'0 0 100%', width:'99%', marginTop:'4.5rem', boxSizing:'border-box'}}>
            <hr></hr>
        </div>
                <div className="row" style={{justifyContent:'center', boxSizing:'border-box', display:'flex'}}>
                    <div className="col-12" style={{textAlign:'center', flex:'0 0 100%', width:'99%'}}>
                        <h1 style={{fontSize:'4.5rem', fontWeight:'300', lineHeight:'1.2'}}>
                        <i className="fa fa-apple"></i>  Projetos</h1>
                        <p>Todos os projetos desta lista estão disponíveis em github.com/brunohdk. Nesta lista contém vários tipos de projetos, desde os criados 100% por mim, até alguns criados em projetos compartilhados, outros acompanhando cursos com modificações, etc..</p>
                    </div>
                    {CardDatas.map(art => {
                        return(
                        <div className="col-sm-6 col-md-4 col-6">
                        <Card>
                            <CardHeader>
                                <h5 style={{fontSize:'1.9rem'}}>{art.title}</h5>
                            </CardHeader>
                            <CardImg src={art.image} alt={art.image}/>
                            <CardBody>
                                <h5 style={{marginBottom:'0.75rem'}}>{art.subtitle}</h5>
                                <h6 style={{color:'#6c757d', marginBottom:'1rem', marginTop:'-0.375rem'}}>{art.desc}</h6>
                                <p>{art.content}</p>
                            </CardBody>
                                <CardLi>
                                    <Link to={art.linktest}><Button variant="extended" size="large" style={{fontSize:'12px'}}>Teste o sistema</Button></Link>
                                    <Link><Button variant="extended" size="large" style={{fontSize:'12px'}}>Visite o código</Button></Link>
                                </CardLi>
                            <Button variant="contained" color="default" style={{fontSize:'17.5px', height:'58px'}}>Passo a passo do projeto</Button>
                        </Card>
                    </div>
                        )
                    })}    
                    </div>
    </div>
    )
}

export default dashRow