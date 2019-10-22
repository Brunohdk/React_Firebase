import React from 'react'
import ProjectSummary from './projectSummary'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardDatas from '../contents/datas/AllDatas';

const projectList = ({articles}) => {
    const settings = {
        dots: true,
      infinite: true,
      speed: 415,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true
    }
    return(
        <div style={{textAlign:'center',paddingBottom:'1px'}}>
            <h1 style={{paddingBottom:'25px'}}>Posts Recentes</h1>
        <Slider {...settings}>
            {CardDatas && CardDatas.map(art => {
                return(
                    <Link to={art.linktest} key={art.id}>
                    <ProjectSummary art={art}/>
                    </Link>
                )
            })}
      </Slider>
      </div>
    )
}

export default projectList