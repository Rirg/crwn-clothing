import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";
import * as S from './directory.styles';

const Directory = ({sections}) => (
    <S.Container>
        {sections.map(({id, ...otherSectionProps}) =>
            <MenuItem key={id} {...otherSectionProps}/>
        )}
    </S.Container>

);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);