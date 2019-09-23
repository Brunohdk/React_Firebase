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
                            <p style={{marginTop:'100px'}}>Company: <span>{company}</span></p>
                            <p style={{margin:'30px 0px'}}>Model: <span>{title}</span></p>
                            <p>Price: <span>R${price}</span></p>
                            <div>
                                <Link to='/cellmarket'>
                                    <button>BACK</button>
                                </Link>
                                <button
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
                            {info}
                        </div>
                    </div>
                </div>
                )
            }}
        </ProductConsumer>
    )
}

export default CSDetails