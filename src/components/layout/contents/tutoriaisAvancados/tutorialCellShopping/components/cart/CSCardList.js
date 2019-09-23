import React from 'react';
import CSCartItem from './CSCartItem'


export default function CSCartList({value}){

    return(
        <div className="container-fluid">
            {value.cart.map(item => {
                return <CSCartItem key={item.id} item={item} value={value}/>
            })}
        </div>
    )
}