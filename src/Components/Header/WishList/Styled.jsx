import styled, { keyframes, css } from 'styled-components';

const OpenCloseWishList = (wishListWidth1, wishListWidth2) => keyframes`
  from {
    transform: translateX(${wishListWidth1}%);
  }
  to {
    transform: translateX(${wishListWidth2}%);
  }
`;

const CloseWishListIconAnimation = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(180deg);
  }
`;

const redWhistList = "#e91e25";

export const WishList = styled.div`
  height: 100%;
  width: 25%;
  padding: 20px;
  color: #fff;
  top: 0;
  right: 0;
  float: right;
  z-index: 999;
  position: fixed;
  background-color: #111;
  overflow-x: hidden; 
  padding-top: 65px;
  animation: ${({ wishListWidth1, wishListWidth2 }) => css`${OpenCloseWishList(wishListWidth1, wishListWidth2)} 0.5s linear forwards;`};
  
  @media(max-width: 1125px) {
    width: 30%;
  }
  @media(max-width: 945px) {
    width: 40%;
  }
  @media(max-width: 705px) {
    width: 100%
  }
`;

export const CloseWishListIcon = styled.span`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 32px;
  margin-left: 50px;
  cursor: pointer;
  margin-top: 20px;
  :hover {
  animation: ${CloseWishListIconAnimation} 0.4s forwards;
  }
`;

export const TitleProduct = styled.h4`
  margin-bottom: 10px;
`

export const ImageProduct = styled.img`
  width: 50%;
  max-height: 100px;
  @media(max-width: 705px) {
    width: 30%
  }
  @media(max-width: 500px) {
    width: 50%
  }
`

export const WhistlistRemoveAdd = styled.button`
  height: 23px;
  width: 20px;
  color: #fff;
  float: right;
  margin-right: 10px;
  position: relative;
  top: 35px;
  left: -50px;
  background: ${props => props.add ? "green" : redWhistList};
  :hover {
    opacity: 0.8;
  }
`;

export const WishListDetailsHr = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
`

export const WishListDetailsButton = styled.button`
  padding: 10px;
  background: ${redWhistList};
  float: ${props => props.float ? "right" : ""};
  color: #fff;
  :hover {
  opacity: 0.8;
}
`;

export const EmptyWishList = styled.span`
  font-size: 200px;
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;