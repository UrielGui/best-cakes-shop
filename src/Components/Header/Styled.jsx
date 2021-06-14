import styled from 'styled-components';

export const HeaderStyle = styled.header`
    background: #3a0f2e;
    color: #fff;
`;

export const FlexHeader = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 450px) {
    flex-direction: column;
    padding-bottom: 5px;
  }
`;

export const FlexHeaderLogo = styled.div`
    flex-grow: 2;
`;

export const HeaderLogoImg = styled.img`
    width: 215px;
    height: 75px;
`;

export const FlexHeaderBasket = styled.div`
    align-self: center;
    position: relative;
    top: -10px;
`;

export const Basket = styled.span`
    position: relative;
    top: 10px;
`;

export const CountBasket = styled.small`
    background: #3ca78a;
    padding: 4px 5px 1px 5px;
    border-radius: 10px;
    position: relative;
    top: -19px;
`;

export const CountWishList = styled.small`
    background: rgb(233, 30, 99);;
    padding: 4px 5px 1px 5px;
    border-radius: 10px;
    position: relative;
    top: -19px;
`;