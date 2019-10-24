import React from 'react';
import Product from './CSProduct';
import Title from './CSTitle';
import {ProductConsumer} from '../assets/CScontext';
import styled from 'styled-components';


function CSProductList(){
    const BackButton = styled.button`
    padding:10px 20px;
    background-color:white;
    border-radius:10px;
    margin: 10px auto;
	display:flex;
    `

    return(
        <>
                <div className="container" style={{margin:'0 auto'}}>
                    <Title name="BEST" title="OFFERS"/>
                    <div className="row">
                        <ProductConsumer>
                            {value => value.products.map(product => {
                               return <Product key={product.id} product={product}/>   
                            })}
                        </ProductConsumer>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
			            <a href="/"><BackButton>Voltar</BackButton></a>
			        </div>
                </div>
        </>
            /* <Product></Product> */
    )
}

export default CSProductList