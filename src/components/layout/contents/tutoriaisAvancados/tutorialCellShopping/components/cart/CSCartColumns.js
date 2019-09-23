import React, {useState} from 'react';

function CSCartColumns(){

    return(
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row" style={{backgroundColor:'#01095E'}}>
                <div className="col-10 mx-auto col-lg-2">
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Products</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" style={{borderRight:'2px solid #ffff', borderLeft:'2px solid #ffff'}}>
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Name</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" style={{borderRight:'2px solid #ffff'}}>
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Price</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" style={{borderRight:'2px solid #ffff'}}>
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Amount</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" style={{borderRight:'2px solid #ffff'}}>
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Remove</p>
                </div>
                <div className="col-10 mx-auto col-lg-2" style={{borderRight:'2px solid #ffff', borderLeft:'2px solid #ffff'}}>
                    <p className="text-uppercase text-title" style={{fontSize:'26px', color:'#ffff', padding:'7px 0px'}}>Total</p>
                </div>
            </div>
        </div>
    )
}

export default CSCartColumns;