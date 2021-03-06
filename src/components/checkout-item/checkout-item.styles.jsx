import styled, {css} from "styled-components";

const DetailsStyles = css`
  width: 23%;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
`

export const Name = styled.span`
  ${DetailsStyles}
`

export const Quantity = styled.span`
    ${DetailsStyles};
    display: flex;
    padding-left: 20px;
`

export const Price = styled.span`
  ${DetailsStyles}
`

export const Arrow = styled.div`
   cursor: pointer;
`

export const Value = styled.span`
   margin: 0 10px;
`

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`