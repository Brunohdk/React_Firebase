import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function CSCartItem({item,value}){
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem, cart} = value;
    return(
        <div className="row my-2 text-capitalize text-center" style={{paddingTop:'30px'}}>
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} alt="IMG"className="img-fluid" style={{width:'125px', height:'125px', margin:'0 auto'}}/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price:</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <button onClick={() => decrement(id)} style={{fontSize:'0.8rem', borderRadius:'5px',
                    padding:'7px 9px',backgroundColor:'transparent', outline:'none'}}>-</button>
                        <button style={{fontSize:'1.6rem', borderRadius:'5px',margin:'0px 3px',
                    padding:'5px 6px',backgroundColor:'transparent', outline:'none'}}>{count}</button>
                    <button onClick={() => increment(id)} style={{fontSize:'0.8rem', borderRadius:'5px',
                    padding:'7px 9px',backgroundColor:'transparent', outline:'none'}}>+</button>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                {console.log(cart)}
                <button onClick={() => removeItem(id)}><FontAwesomeIcon icon={faTrash} size="1x"/></button>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>Item Total: R$ {total}</strong>
            </div>
        </div>
    )
}