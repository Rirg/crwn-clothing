import React from "react";

import * as S from './checkout-item.styles';

import {connect} from "react-redux";
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image src={imageUrl} alt={name}/>
            </S.ImageContainer>
            <S.Name>{name}</S.Name>
            <S.Quantity>
                <S.Arrow onClick={() => removeItem(cartItem)}>&#10094;</S.Arrow>
                <S.Value>{quantity}</S.Value>
                <S.Arrow onClick={() => addItem(cartItem)}>&#10095;</S.Arrow>
            </S.Quantity>
            <S.Price>${price}</S.Price>
            <S.RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</S.RemoveButton>
        </S.Container>
    )
};


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});
export default connect(null, mapDispatchToProps)(CheckoutItem);