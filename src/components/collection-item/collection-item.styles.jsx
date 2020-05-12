import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Container = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    margin-bottom: 2rem;
    position: relative;
    
    &:hover {
        .image {
          opacity: .8;
        }
        
        button {
          opacity: .85;
          display: flex;
        }
    }
`

export const Image = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: ${({imageUrl}) => `url(${imageUrl})` };
`

export const ContainerFooter = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.span`
    width: 90%;
    margin-bottom: 15px;
`

export const Price = styled.span`
    width: 10%;
`

export const Button = styled(CustomButton)`
    width: 80%;
    opacity: 0.7;
    position: absolute;
    bottom: 50px;
    display: none;
`


