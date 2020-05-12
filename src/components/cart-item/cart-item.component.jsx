import React from "react";
import * as S from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <S.Container>
      <S.Image src={imageUrl} alt="item"/>
      <S.DetailsContainer>
          <S.Name>{name}</S.Name>
          <S.Price>{quantity} x ${price}</S.Price>
      </S.DetailsContainer>
  </S.Container>
);

export default CartItem;