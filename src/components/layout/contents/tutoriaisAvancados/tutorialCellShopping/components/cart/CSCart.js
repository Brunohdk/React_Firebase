import React, {useState} from 'react';
import Title from '../CSTitle';
import CSCartColumns from './CSCartColumns';
import CSCartEmpty from './CSCartEmpty';
import {ProductConsumer} from '../../assets/CScontext';
import CSCardList from './CSCardList';
import CSCardTotals from './CSCardTotals';

function CSCart(){


    return(
        <section>
        <ProductConsumer>
        {value => {
            const {cart} = value;
            if(cart.length > 0){
            return(
                <>
                <Title name="MY" title="CART" />
                <CSCartColumns />
                <CSCardList value={value}/>
                <CSCardTotals value={value} />
                </>
                )}else{
                   return <CSCartEmpty />
                }
        }}
        </ProductConsumer>
        </section>
    )
}

export default CSCart