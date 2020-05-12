import React from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/cart/cart.actions";

import * as S from "./collection-item.styles"


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
        <S.Container>
            <S.Image className='image'
                 style={{
                     backgroundImage: `url(${imageUrl})`
                 }}
            />
            <S.ContainerFooter>
                <S.Name>{name}</S.Name>
                <S.Price>{price}</S.Price>
            </S.ContainerFooter>

            <S.Button onClick={() => addItem(item)} inverted>Add to cart</S.Button>

        </S.Container>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);