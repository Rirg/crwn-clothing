import React from "react";

import './checkout-item.styles.scss';

import {connect} from "react-redux";
import {removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, dispatch}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt={name}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>
        <div onClick={() => dispatch(removeItem(cartItem))} className='remove-button'>&#10005;</div>
    </div>
    )
};


const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item))
});
export default connect()(CheckoutItem);