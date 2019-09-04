import React from 'react'
import Img from '../../assets/testebom.png'


const recentPost = ({articles}) => {
    return(
        <div className="content clearfix" style={{width:'90%', border:'1px solid red'}}>
            <div className="main-content" style={{width:'70%', float:'left', border:'1px solid blue'}}>
                <h1>Recent Post</h1>
            </div>
            <div>
                <img src={Img} alt='logo'/>
                <div>
                    <h1>testetetest stete stete stete stete adadwedasda</h1>
                    <i className="fa fa-user">Bruno Hideki</i>

                    <p>lorem ipsium aodaosi odajkoda lorem ipsium aodaosi odajkoda
                    lorem ipsium aodaosi odajkoda lorem ipsium aodaosi odajkoda
                    </p>
                    <a href="/">Read More</a>
                </div>
            </div>
            <div className="sidebar" style={{width:'30%', float:'left', border:'1px solid green',
        height:'300px'}}>

            </div>
        </div>
    )
}

export default recentPost