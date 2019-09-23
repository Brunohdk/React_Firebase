import React, {useState} from 'react';
import Product from './CSProduct';
import Title from './CSTitle';
import {ProductConsumer} from '../assets/CScontext'


function CSProductList(){
    return(
        <>
        <div>
            <div>
                <div className="container">
                    <Title name="BEST" title="OFFERS" />
                    <div className="row">
                        <ProductConsumer>
                            {value => value.products.map(product => {
                               return <Product key={product.id} product={product}/>   
                            })}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </div>
        </>
            /* <Product></Product> */
    )
}

export default CSProductList