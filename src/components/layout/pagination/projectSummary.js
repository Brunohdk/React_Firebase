import React from 'react'

const ProjectSummary = ({art}) => {
    return(
        <div style={{display:'inline-block', textAlign:'center', width:'100%', height:'250px', 
    margin:'0px auto'}}>
         <div style={{width:'325px', height:'350px', margin:'0px 10px'}}>
             <img src={art.image} alt='logo' style={{width:'100%', height:'250px', borderRadius:'20px',
            boxShadow:'0 1px 1.5rem rgba(0,0,0,.1)'}}/>
             <div style={{marginTop:'7px', width:'100%'}}>
                 <h4>{art.title}</h4>
             </div>
         </div>
        </div>

    )
}

export default ProjectSummary