import React from "react";

import * as S from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
    <S.Container {...props}>
        {children}
    </S.Container>
);

export default CustomButton;