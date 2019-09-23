import React from 'react';


export default function Title({name, title}){


    return(
        <div className="row" style={{justifyContent:'center'}}>
            <div className="col-10" style={{textAlign:'center', textTransform:'uppercase',
             letterSpacing:'0.3rem', display:'flex',justifyContent:'center', marginBottom:'25px'}}>
                <h1 style={{fontWeight:'bold', marginRight:'35px'}}>{name}</h1>
                <h1 style={{color:'blue'}}>{title}</h1>
            </div>
        </div>
    )
}