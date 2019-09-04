import React from 'react'
import ProjectSummary from './projectSummary'
import {Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
            <h1 style={{paddingBottom:'10px'}}>Posts Recentes</h1>
        <Slider {...settings}>
            {articles && articles.map(art => {
                return(
                    <Link to={'/article/' + art.id} key={art.id}>
                    <ProjectSummary art={art}/>
                    </Link>
                )
            })}
      </Slider>
      </div>
    )
}

export default projectList