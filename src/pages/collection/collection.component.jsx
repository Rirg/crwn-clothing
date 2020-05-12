import React from "react";
import {connect} from 'react-redux'

import {selectCollection} from "../../redux/shop/shop.selectors";

import * as S from './collection.styles'
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.ItemsContainer>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </S.ItemsContainer>
        </S.Container>
    )
};

const mapStateToProps = (state, ownProps) => ({
    // We use currying here, sending the first parameter 'collectionUrlParam', then this will return us the function createSelector
    // that will require the state
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);