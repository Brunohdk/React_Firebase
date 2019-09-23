import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../assets/CScontext';

function CSModal(){

    return(
        <ProductConsumer>
            {value => {
                const {modalOpen, closeModal} = value;
                const {img,title, price} = value.modalProdact;
                if(!modalOpen){
                    return null;
                }else{
                    return (
                        <div style={{position:'fixed', top:'0', left:'0', right:'0', bottom:'0',
                         background:'rgba(0,0,0,0.3)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                                    style={{backgroundColor:'#ffff', padding:'40px 20px'}}>
                                        <h5 style={{fontWeight:'550', fontSize:'27px'}}>CONFIRM YOUR ITEM</h5>
                                        <hr style={{border:'1.5px solid #01095E'}}/>
                                        <img src={img} className="img-fluid" alt="Your Product"/>
                                        <h5 style={{fontSize:'22px'}}>{title}</h5>
                                        <h5 className="text-muted mt-2" style={{fontSize:'20px'}}>Price: R${price}</h5>
                                        <Link to='/cellmarket'><button className="btn btn-primary" style={{margin:'8px 4px'}}
                                        onClick={() => closeModal()}>Back Store</button></Link>
                                        <Link to='/cellmarket/cart'><button className="btn btn-danger"
                                        onClick={() => closeModal()}>Go To Cart</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }}
        </ProductConsumer>
    )
}

export default CSModal;