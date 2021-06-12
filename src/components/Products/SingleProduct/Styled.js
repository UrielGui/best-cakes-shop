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
    margin: 20px
`;

export const DetailsProduct = styled.div`
    margin-top: 20px;
    text-align: center;
    margin-bottom: 10px;
`;

export const TitleProduct = styled.h3`
    text-align: center;
    height: 30px;
    margin-top: 5px;
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
`;

export const ButtonAddtoCart = styled.button`
    padding: 10px;
    background: #2e886f;
    color: #fff;
    width: 80%;
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
    width: 20%;
    border-radius: 0px 10px 10px 0px;
    margin-bottom: 15px;
    :hover {
        opacity: 0.8;
    }
`;

export const AddtoCartText = styled.span`
    position: relative;
    top: -5.5px;
`;

export const AddtoCartIcon = styled.span`
    font-size: 20px;
    color: #fff;
`;