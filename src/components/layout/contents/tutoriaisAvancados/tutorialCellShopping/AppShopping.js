import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/CSnavBar'
import ProductList from './components/CSProductList';
import Details from './components/CSDetails';
import Cart from './components/cart/CSCart';
import Default from './components/CSDefault';
import Modal from './components/CSModal'
import {CScontext} from './assets/CScontext'
import './styles/AppShopping.css'

function AppShopping(){

    return(
        <CScontext>
            <Navbar/>
            <Switch>
                <Route exact path='/cellmarket' component={ProductList} />
                <Route path='/cellmarket/details' component={Details} />
                <Route path='/cellmarket/cart' component={Cart} />
                <Route component={Default} />
            </Switch>
            <Modal />
        </CScontext>
    )
}

export default AppShopping