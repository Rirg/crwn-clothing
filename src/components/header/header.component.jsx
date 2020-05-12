import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";

import {auth} from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {ReactComponent as Logo} from "../../assets/crown.svg";

import * as S from './header.styles'

const Header = ({currentUser, hidden}) => (
    <S.Container>
        <S.LogoContainer to='/'>
            <Logo className='logo'/>
        </S.LogoContainer>
        <S.Options>
            <S.OptionLink to='/shop'>
                SHOP
            </S.OptionLink>
            <S.OptionLink to='/shop'>
                CONTACT
            </S.OptionLink>
            {
                currentUser ?
                    <S.OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</S.OptionLink>

                    :
                    <S.OptionLink to={'/signin'}>SIGN IN</S.OptionLink>
            }
            <CartIcon/>
        </S.Options>
        {hidden ? null : <CartDropdown/>}

    </S.Container>
);


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);