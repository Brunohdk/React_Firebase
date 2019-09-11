import React from 'react'
import Img from '../../assets/testebom.png'

const ProjectSummary = ({art}) => {
    return(
        <div style={{display:'inline-block', textAlign:'center', width:'100%', height:'250px', 
    margin:'0px auto'}}>
         <div style={{width:'325px', height:'350px', margin:'0px 10px'}}>
             <img src={Img} alt='logo' style={{width:'100%', height:'230px', borderRadius:'30px',
            boxShadow:'0 1px 1.5rem rgba(0,0,0,.1)'}}/>
             <div style={{marginTop:'7px'}}>
                 <h4>{art.title}</h4>
             </div>
         </div>
        </div>

    )
}

export default ProjectSummary