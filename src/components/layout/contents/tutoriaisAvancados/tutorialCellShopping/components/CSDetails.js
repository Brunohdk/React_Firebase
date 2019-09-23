import React, {useState} from 'react';
import {ProductConsumer} from '../assets/CScontext';
import {Link} from 'react-router-dom';

function CSDetails(){


    return(
        <ProductConsumer>
            {value => {
                const {id, company, img, info, price, title, inCart} = value.detailProducts;
                return(
                <div>
                    <div className="container CSProductDetail">
                        <div className="CSProductDetailImg">
                            <img src={img} alt="Product"/>
                        </div>
                        <div className="CSProductDetails">
                            <p style={{marginTop:'100px', fontSize:'25px'}}>Company: <span>{company}</span></p>
                            <p style={{margin:'30px 0px', fontSize:'25px'}}>Model: <span>{title}</span></p>
                            <p style={{fontSize:'25px'}}>Price: <span>R${price}</span></p>
                            <div style={{marginTop:'40px'}}>
                                <Link to='/cellmarket'>
                                    <button className="btn btn-primary mr-2">BACK</button>
                                </Link>
                                <button className="btn btn-danger"
                                disabled={inCart? true : false}
                                onClick={() => {value.addToCart(id); value.openModal(id);}}
                                >{inCart? 'inCart' : 'Add To Cart'}</button>
                            </div>
                        </div>
                        <div className="CSProductDetailInfo">
                            <h1 style={{justifyContent:'center', display:'flex',
                             marginBottom:'15px', fontSize:'45px'}}>
                                 More about:
                            </h1>
                            <div style={{border:'3px solid #01095E', borderRadius:'4px', padding:'12px'}}>{info}</div>
                        </div>
                    </div>
                </div>
                )
            }}
        </ProductConsumer>
    )
}

export default CSDetails