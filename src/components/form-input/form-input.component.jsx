import React from "react";

import * as S from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <S.Container>
        <S.Input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
                (<S.Label className={`${otherProps.value.length ? 'shrink ' : ''}form-input-label`}>
                    {label}
                </S.Label>)

                : null
        }
    </S.Container>
)

export default FormInput;