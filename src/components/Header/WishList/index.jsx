import React from 'react';
import * as Styled from './Styled';
import { FaHeartBroken } from "react-icons/fa";

export default function WhishList(props) {

  const { showWishList } = props;
  const { setshowWishList } = props;

  const { WishList, onRemoveWishList, onEmptyWishList } = props;
  const emptyWishList = (
    <React.Fragment>
    <h3 style={{textAlign: "center"}}>Sem favoritos :(</h3>
    <Styled.EmptyWishList>
      <FaHeartBroken />
    </Styled.EmptyWishList>
    </React.Fragment>
  )

  const WhishList = () => {
    return (
      <React.Fragment>
        <Styled.CloseWishListIcon onClick={() => {
          setshowWishList(showWishList === false);
        }}> X</Styled.CloseWishListIcon>

        {WishList.length === 0 && emptyWishList}
        {WishList.map((item) => (
          <div key={item.id}>

            <Styled.TitleProduct>{item.name}</Styled.TitleProduct>
              <Styled.ImageProduct src={item.image} alt="" />
            <Styled.FavoritesDetailsRemove style={{float: 'right'}} onClick={() => onRemoveWishList(item)}>x</Styled.FavoritesDetailsRemove>
            <Styled.FavoritesDetailsHr />
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
      <Styled.WhishList wishListHeight1={props.left} wishListHeight2={props.left2}>
        {WhishList()}
      </Styled.WhishList>
    </React.Fragment>
  );
}
