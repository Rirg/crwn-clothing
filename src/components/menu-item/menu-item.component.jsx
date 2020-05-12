import React from "react";
import * as S from './menu-item.styles'
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <S.Container className={`${size}`}
         onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <S.BackgroundImage className='background-image' style={{
            backgroundImage: `url(${imageUrl})`,
        }}/>
        <S.Content>
            <S.Title>{title.toUpperCase()}</S.Title>
            <S.Subtitle>SHOP NOW</S.Subtitle>
        </S.Content>
    </S.Container>
);

export default withRouter(MenuItem);