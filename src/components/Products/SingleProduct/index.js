import React from 'react';
import Price from '../Price';
import * as Styled from './Styled';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function Product(props) {

  const addCart = () => toast.success('Adicionado ao carrinho!');
  const addWishList = () => toast.info('Adicionado aos favoritos!');

  const { product, onAdd, onAddFavorites } = props;

  return (

    <Styled.Product>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={3000}
        closeButton={false}
        hideProgressBar
        newestOnTop={false}
        // toastClassName={props => props.cart === addCart ? "cart-toast" : "wishlist-toast"}
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

        <Styled.ButtonAddtoCart onClick={() => { onAdd(product), addCart(); }}>
          <Styled.AddtoCartIcon>
            <FaShoppingBasket />
          </Styled.AddtoCartIcon>
          <Styled.AddtoCartText> Adicionar ao carrinho</Styled.AddtoCartText>
        </Styled.ButtonAddtoCart>

        <Styled.ButtonAddtoWishList onClick={() => { onAddFavorites(product), addWishList(); }}><FaRegHeart style={{ fontSize: "20px", color: "#fff" }} /></Styled.ButtonAddtoWishList>
      </Styled.ButtonsProduct>

    </Styled.Product>
  );
}
