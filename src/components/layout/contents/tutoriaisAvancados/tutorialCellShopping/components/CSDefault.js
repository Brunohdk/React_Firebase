import React, {useState} from 'react';

export default function CSDefault(props){


    return(
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title pt-5">
                    <h1 style={{paddingBottom:'35px'}}>404 - NOT FOUND</h1>
            <h1 style={{fontSize:'30px', fontWeight:'300'}}>{(props.location.pathname).toUpperCase()}  was not found.</h1>
                </div>
            </div>
        </div>
    )
}