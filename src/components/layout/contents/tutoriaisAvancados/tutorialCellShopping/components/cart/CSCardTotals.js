import React from 'react';
import {Link} from 'react-router-dom';

function CSCardTotals({value}) {
    const {cartTotal, clearCart} = value
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                    <Link to="/cellmarket">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                        onClick={() => clearCart()}>
                            clear cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">total :</span>
                        <strong>R$ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
        </>
    )
}

export default CSCardTotals
