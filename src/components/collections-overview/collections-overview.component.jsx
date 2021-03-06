import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import * as S from './collections-overview.styles';
import CollectionPreview from "../preview-selection/collection-preview.component";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({collections}) => (
    <S.Container>
        {
            collections.filter((item, idx) => idx < 4)
                .map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
        }
    </S.Container>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);