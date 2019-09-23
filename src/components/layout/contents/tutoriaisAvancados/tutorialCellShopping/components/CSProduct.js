import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../assets/CScontext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';


function CSProduct(props){
    const {id, title, img, price, inCart, company, color} = props.product

    return(
        <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
            <ProductConsumer>
                {value => (
                <div className="card CSCardBody" 
                onClick={() => value.handleDetail(id)}>
                    <div className="card-header CSCardHeader">
                        <p>{company}</p>
                    </div>
                    <div className="img-container CSCardImage p-5">
                        <Link to="/cellmarket/details">
                            <img src={img} className="CSCardImgTop"/>
                        </Link>
                        <button className="CSCardCart" disabled={inCart? true : false} 
                        onClick={() => {value.addToCart(id); value.openModal(id);}}>
                            {inCart? (<FontAwesomeIcon icon={faHandHoldingUsd} style={{fontSize:'20px'}} />):(<FontAwesomeIcon icon={faCartPlus} style={{fontSize:'20px'}}/>)}
                        </button>
                    </div>
                    <div className="card-footer CSCARDFOOTER"><p className="CSCardTitle">{title}</p><p className="CSCardTcolor" style={{color:`${color}`}}>{color}</p></div>
                    <div className="CSCARDFOOTER2"><p className="CSCardPrice">R${price}</p></div>
                </div>
                    )}
            </ProductConsumer>
        </div>
    )
}

export default CSProduct