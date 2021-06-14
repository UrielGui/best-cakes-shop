import React, { useState, useContext } from 'react';
import * as Styled from './Styled';
import { Container } from '../../Styles/Globals';
import Basket from './Basket';
import WishList from './WishList';
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Logo from "../../Images/logo.png";

import { WishListOpenCloseAnimation } from '../../Contexts';
import { BasketOpenCloseAnimation } from '../../Contexts';

export default function Header(props) {

  let [showBasket, setShowBasket] = useState(true);
  let [showWishList, setshowWishList] = useState(true);
  let { showWishListAnimation1, setShowWishListAnimation1, 
    showWishListAnimation2, setShowWishListAnimation2 } = useContext(WishListOpenCloseAnimation);
  let { showBasketAnimation1, setShowBasketAnimation1, 
  showBasketAnimation2, setShowBasketAnimation2 } = useContext(BasketOpenCloseAnimation)

  return (
    <div className="nav">
      <Styled.HeaderStyle>
        <Container>
          <Styled.FlexHeader>
            <Styled.FlexHeaderLogo>
              <a href={"/"}>
                <Styled.HeaderLogoImg src={Logo} alt=""></Styled.HeaderLogoImg>
              </a>

            </Styled.FlexHeaderLogo>
            <Styled.FlexHeaderBasket>
              <Styled.Basket>
                <span style={{ cursor: "pointer" }} onClick={() => {
                  setshowWishList(showWishList = false);
                  setShowWishListAnimation1(showWishListAnimation1 = 100)
                  setShowWishListAnimation2(showWishListAnimation2 = 75)
                }}>
                  <FaRegHeart style={{ fontSize: "20px", color: "#fff" }} />
                  {props.countWishList ? (
                    <Styled.CountWishList>{props.countWishList}</Styled.CountWishList>
                  ) : (
                    <Styled.CountWishList>0</Styled.CountWishList>
                  )}
                </span>

                <span style={{ cursor: "pointer" }} onClick={() => {
                  setShowBasket(showBasket = false);
                  setShowBasketAnimation1(showBasketAnimation1 = 100)
                  setShowBasketAnimation2(showBasketAnimation2 = 75)
                }}>
                  <FaShoppingBasket style={{ fontSize: "20px", color: "#fff" }} />
                  {props.countbasketItems ? (
                    <Styled.CountBasket>{props.countbasketItems}</Styled.CountBasket>
                  ) : (
                    <Styled.CountBasket>0</Styled.CountBasket>
                  )}
                </span>
              </Styled.Basket>
            </Styled.FlexHeaderBasket>
            {showBasket !== true
              ? <Basket
                basketItems={props.basketItems}
                onAddBasket={props.onAddBasket}
                onEmptyBasket={props.onEmptyBasket}
                onRemoveBasket={props.onRemoveBasket}
                showBasket={showBasket}
                setShowBasket={setShowBasket}
                left={showBasketAnimation1}
                left2={showBasketAnimation2}
              ></Basket>
              : null
            }
            {showWishList !== true
              ? <WishList
                WishList={props.WishList}
                onAddBasket={props.onAddBasket}
                onRemoveWishList={props.onRemoveWishList}
                onEmptyWishList={props.onEmptyWishList}
                showWishList={showWishList}
                setshowWishList={setshowWishList}
                left={showWishListAnimation1}
                left2={showWishListAnimation2}
              ></WishList>
              : null
            }
          </Styled.FlexHeader>
        </Container>
      </Styled.HeaderStyle>
    </div>
  );
}
