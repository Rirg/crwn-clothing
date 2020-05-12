import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import * as S from './checkout.styles'


const CheckoutPage = ({cartItems, cartTotal}) => (

    <S.Container>
        <S.HeaderContainer>
            <S.HeaderBlock>
                <span>Name</span>
            </S.HeaderBlock>
            <S.HeaderBlock>
                <span>Description</span>
            </S.HeaderBlock>
            <S.HeaderBlock>
                <span>Quantity</span>
            </S.HeaderBlock>
            <S.HeaderBlock>
                <span>Price</span>
            </S.HeaderBlock>
            <S.HeaderBlock>
                <span>Remove</span>
            </S.HeaderBlock>
        </S.HeaderContainer>

        {cartItems.map(cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}

        <S.TotalContainer>
            <span>TOTAL ${cartTotal}</span>
        </S.TotalContainer>
        <S.TestWarningContainer>
            *Please use the following test credit card for payments*
            <br/>
            4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
        </S.TestWarningContainer>
        <StripeCheckoutButton price={cartTotal}/>
    </S.Container>
);


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);