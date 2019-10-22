import React, {useState, useEffect} from 'react';
import {storeProducts, detailProduct} from './CSdata';


const ProductContext = React.createContext();

function CScontext(props){
    const [products, setProducts] = useState(storeProducts);
    const [detailProducts, setDetailProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProdact, setModalProdact] = useState(detailProduct);
    const [cartTotal, setCartTotal] = useState();
    
    useEffect(() => addTotals(), [cart]);

    /* const setarUsuario = () => {
        let tempProductss = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProductss = [...tempProductss, singleItem];
        })
        setProducts(() => tempProductss)
    } TESTE */

    const getItem = id => {
        const product = products.find(item => item.id === id)
        return product 
    }

    const handleDetail = id => {
        const product = getItem(id);
        setDetailProducts(product)
    };
    
    const addToCart = id => {
        let tempProduct = [...products];
        const index = tempProduct.indexOf(getItem(id));
        const product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        setCart([...cart, product]);
        setProducts(tempProduct);
    }

    const openModal = id => {
        const product = getItem(id);
        setModalOpen(true);
        setModalProdact(product);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const increment = id => {
        let tempCart = [...cart];
        const selected = tempCart.find(i => i.id === id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        setCart([...tempCart]);
    }

    const decrement = id => {
        let tempCart = [...cart];
        const selected = tempCart.find(i => i.id === id);
        const index = tempCart.indexOf(selected);
        const product = tempCart[index];
        product.count = product.count - 1;
        if(product.count === 0 ){
            removeItem(id)
        }else{
            product.total = product.count * product.price;
            setCart([...tempCart]);
        };
    }

    const removeItem = id => {
        let product = [...products];
        let carts = [...cart];
        carts = carts.filter(i => i.id !== id);
        const index = product.indexOf(getItem(id));
        let removed = product[index];
        removed.inCart = false;
        removed.count = 0;
        removed.total = 0;
        setCart([...carts]);
        setProducts([...product]);

    }

    const clearCart = () => {
        let product = [...products];
        product.map(i => i.inCart = false);
        setProducts([...product]);
        setCart([]);
    }

    const addTotals = () => {
        let subTotal = 0;
        cart.map(i => (subTotal += i.total));
        setCartTotal(subTotal);
    }

    return(
        <ProductContext.Provider value={{products, detailProducts, addToCart, handleDetail, openModal, closeModal,
        modalProdact, modalOpen, cart, increment, decrement, removeItem, clearCart, cartTotal, addTotals}}>
             {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;

export {CScontext, ProductConsumer}