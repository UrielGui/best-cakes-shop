import styled from 'styled-components';

export const Product = styled.div`
    background-image: linear-gradient(-218deg,#27061e 51%,#772060 96%);
    color: #fff;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 0 3px #0b012185, 0 0 5px #0b012185, 0 0 15px #0b012185, 0 0 40px #0b012185;
    transition: all 0.4s ease-in-out;
    width: 18rem;
    margin-bottom: 40px;
    margin: 20px;

    @media(max-width: 265px)  {
        padding: 20px 10px 20px 10px;
    }

    @media (min-width: 1640px) {
        width: 22rem;
    }
`;

export const DetailsProduct = styled.div`
    margin: 20px 0px 10px 0px;
    text-align: center;
    @media(max-width: 265px)  {
        margin: 30px 0px 20px 0px;
    }
    
`;

export const TitleProduct = styled.h3`
    text-align: center;
    height: 30px;
    margin-top: 5px;

    @media(max-width: 350px)  {
        font-size: 16px;
    }
`;

export const ImgProduct = styled.img`
    height: 11rem;
    width: 100%;
    border: 3px solid #e91e63;
    border-radius: 5px;
`;

export const ButtonsProduct = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const ButtonAddtoBasket = styled.button`
    padding: 10px;
    background: #2e886f;
    color: #fff;
    align-self: center;
    border-radius: 10px 0px 0px 10px;
    margin-bottom: 15px;
    :hover {
        opacity: 0.8;
    }
`;

export const ButtonAddtoWishList = styled.button`
    padding: 10px;
    background: #e91e63;
    color: #fff;
    border-radius: 0px 10px 10px 0px;
    margin-bottom: 15px;
    :hover {
        opacity: 0.8;
    }
`;

export const AddtoBasketText = styled.span`
    position: relative;
    top: -5.5px;
`;

export const AddtoBasketIcon = styled.span`
    font-size: 20px;
    color: #fff;
`;