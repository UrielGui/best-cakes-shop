import styled, { keyframes, css } from 'styled-components';

const openBasket = (basketWidth1, basketWidth2) => keyframes`
  from {
    transform: translateX(${basketWidth1}%);
  }
  to {
    transform: translateX(${basketWidth2}%);
  }
`;

const blueBasket = '#1e76e9';
const redBasket = '#e91e25';

const CloseBasketIconAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(180deg);
  }
`;

export const Basket = styled.div`
    height: 100%;
    width: 25%;
    padding: 20px;
    color: #fff;
    top: 0;
    right: 0;
    float: right;
    z-index: 999;
    position: fixed;
    background: linear-gradient(75deg, #772064 26%, #3a0f2e 56%);
    box-shadow: 0 0 3px #0b012185, 0 0 5px #0b012185, 0 0 15px #0b012185,
        0 0 40px #0b012185;
    overflow-x: hidden;
    padding-top: 65px;
    animation: ${({ basketWidth1, basketWidth2 }) =>
        css`
            ${openBasket(basketWidth1, basketWidth2)} 0.5s linear forwards;
        `};

    @media (max-width: 1125px) {
        width: 30%;
    }
    @media (max-width: 945px) {
        width: 40%;
    }
    @media (max-width: 705px) {
        width: 100%;
    }
`;

export const CloseBasketIcon = styled.span`
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 32px;
    margin-left: 50px;
    cursor: pointer;
    margin-top: 20px;
    :hover {
        animation: ${CloseBasketIconAnimation} 0.4s forwards;
    }
`;

export const BasketDetailsList = styled.div`
    display: flex;
`;

export const BasketDetailsLeftList = styled.p`
    flex-grow: 2;
    flex-wrap: wrap;
    font-size: ${(props) => (props.total ? '1rem' : '0.8rem')};
`;

export const BasketDetailsSub = styled.small`
    font-size: 0.8rem;
`;

export const BasketDetailsAddRemove = styled.button`
    height: 23px;
    width: 20px;
    margin-right: 10px;
    border-radius: 5px;
    color: #fff;
    background: ${(props) => (props.add ? blueBasket : redBasket)};
    :hover {
        opacity: 0.8;
    }
`;

export const BasketDetailsInstallments = styled.small`
    display: flex;
    justify-content: flex-end;
    font-size: ${(props) => (props.font ? '0.6rem' : '0.8rem')}; ;
`;

export const BasketDetailsCheckout = styled.div`
    padding-top: 20px;
    @media (max-width: 295px) {
        display: flex;
    }
`;

export const BasketDetailsMargin = styled.br`
    margin-top: 20px;
`;

export const BasketDetailsButton = styled.button`
    padding: 10px;
    background: ${(props) => (props.empty ? redBasket : blueBasket)};
    float: ${(props) => (props.float ? 'right' : '')};
    color: #fff;
    border-radius: 7px;
    :hover {
        opacity: 0.8;
    }
`;

export const EmptyBasket = styled.span`
    font-size: 200px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;
