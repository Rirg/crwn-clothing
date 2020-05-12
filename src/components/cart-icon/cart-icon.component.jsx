import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";


import * as S from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <S.Container onClick={toggleCartHidden}>
        <S.ShoppingIcon/>
        <S.ItemCount>{itemCount}</S.ItemCount>
    </S.Container>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Redux selector
const mapStateToProps = createStructuredSelector ({
    itemCount: selectCartItemsCount
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);