import styled, {css} from "styled-components";


const DetailStyles = css`
  font-size: 16px;
`

export const Container = styled.div`
    width: 100%;
    display: flex;
    height: 80px;
    margin-bottom: 15px;
`

export const Image = styled.img`
    width: 30%;
`

export const DetailsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
`

export const Name = styled.div`
    ${DetailStyles}
`

export const Price = styled.div`
    ${DetailStyles}
`
