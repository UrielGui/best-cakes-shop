import React, { useState } from 'react';
import * as Styled from './Styled';
import { Container } from '../../Styles/Globals';
import Basket from './Basket';
import WishList from './WishList';
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import Logo from "../../Images/logo.png";

export default function Header(props) {

  const [showBasket, setShowBasket] = useState(true);
  const [showWishList, setshowWishList] = useState(true);

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
                  setshowWishList(showWishList === false);
                }}>
                  <FaRegHeart style={{ fontSize: "20px", color: "#fff" }} />
                  {props.countWishList ? (
                    <Styled.CountWishList>{props.countWishList}</Styled.CountWishList>
                  ) : (
                    <Styled.CountWishList>0</Styled.CountWishList>
                  )}
                </span>

                <span style={{ cursor: "pointer" }} onClick={() => {
                  setShowBasket(showBasket === false);
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
                left={100}
                left2={75}
              ></Basket>
              : <Basket
                basketItems={props.basketItems}
                left={75}
                left2={100}
              ></Basket>
            }
            {showWishList !== true
              ? <WishList
                WishList={props.WishList}
                onAddBasket={props.onAddBasket}
                onRemoveWishList={props.onRemoveWishList}
                onEmptyWishList={props.onEmptyWishList}
                showWishList={showWishList}
                setshowWishList={setshowWishList}
                left={100}
                left2={75}
              ></WishList>
              : <WishList
                WishList={props.WishList}
                left={75}
                left2={100}
              ></WishList>
            }
          </Styled.FlexHeader>
        </Container>
      </Styled.HeaderStyle>
    </div>
  );
}
