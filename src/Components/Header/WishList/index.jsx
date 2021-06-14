import React, { useContext } from 'react';
import * as Styled from './Styled';
import PriceProduct from '../Basket/Prices/PriceProduct';
import { WishListOpenCloseAnimation } from '../../../Contexts';
import { toast } from 'react-toastify';
import { FaHeartBroken } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function WishList(props) {

  const { showWishList } = props;
  const { setshowWishList } = props;
  let { showWishListAnimation1, setShowWishListAnimation1, 
    showWishListAnimation2, setShowWishListAnimation2 } = useContext(WishListOpenCloseAnimation);

  const addBasketMsg = () => toast.success('Adicionado ao carrinho!');

  const { WishList, onRemoveWishList, onEmptyWishList } = props;
  const emptyWishList = (
    <React.Fragment>
    <h3 style={{textAlign: "center"}}>Sem favoritos :(</h3>
    <Styled.EmptyWishList>
      <FaHeartBroken />
    </Styled.EmptyWishList>
    </React.Fragment>
  )

  const WishListRender = () => {
    return (
      <React.Fragment>
        <Styled.CloseWishListIcon onClick={() => {
          setshowWishList(showWishList === true);
          setShowWishListAnimation1(showWishListAnimation1 = 75);
          setShowWishListAnimation2(showWishListAnimation2 = 100);
        }}> X</Styled.CloseWishListIcon>

        {WishList.length === 0 && emptyWishList}
        {WishList.map((item) => (
          <div key={item.id}>

            <Styled.TitleProduct>{item.name} - <PriceProduct itemsPrice={item.price} /> </Styled.TitleProduct>
              <Styled.ImageProduct src={item.image} alt="" />

            <Styled.WhistlistRemoveAdd onClick={() => onRemoveWishList(item)}
            >x</Styled.WhistlistRemoveAdd>

            <Styled.WhistlistRemoveAdd add onClick={() => {
              props.onAdd(item);onRemoveWishList(item); addBasketMsg();
              }}><FaShoppingBasket /></Styled.WhistlistRemoveAdd>

            <Styled.WishListDetailsHr />
          </div>
        ))}

        {WishList.length !== 0 && (
          <React.Fragment>
              <Styled.WishListDetailsButton
                onClick={() => {
                  onEmptyWishList(WishList.length = 0);
                }
                }>Esvaziar Favoritos</Styled.WishListDetailsButton>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Styled.WishList wishListHeight1={props.left} wishListHeight2={props.left2}>
        {WishListRender()}
      </Styled.WishList>
    </React.Fragment>
  );
}
