import React from 'react';
import Price from '../Price';
import * as Styled from './Styled';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function Product(props) {

  const addBasketMsg = () => toast.success('Adicionado ao carrinho!');
  const addWishListMsg = () => toast.info('Adicionado aos favoritos!');

  const { product, onAddBasket, onAddWishList } = props;

  return (

    <Styled.Product>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={3000}
        closeButton={false}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Styled.ImgProduct src={product.image} alt={product.name} />
      <Styled.TitleProduct>{product.name}</Styled.TitleProduct>
      <Styled.DetailsProduct>
        <div><Price product={product} /></div>
      </Styled.DetailsProduct>

      <Styled.ButtonsProduct>
        <Styled.ButtonAddtoBasket onClick={() => { onAddBasket(product); addBasketMsg(); }}>
          <Styled.AddtoBasketIcon>
            <FaShoppingBasket />
          </Styled.AddtoBasketIcon>
          <Styled.AddtoBasketText> Adicionar ao carrinho</Styled.AddtoBasketText>
        </Styled.ButtonAddtoBasket>

        <Styled.ButtonAddtoWishList onClick={() => { onAddWishList(product); addWishListMsg(); }}><FaRegHeart style={{ fontSize: "20px", color: "#fff" }} /></Styled.ButtonAddtoWishList>
      </Styled.ButtonsProduct>
    </Styled.Product>
  );
}
