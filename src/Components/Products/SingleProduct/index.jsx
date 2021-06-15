import React, { useContext } from 'react';
import { ExistingItemWishListContext } from '../../../Contexts';
import Price from '../Price';
import * as Styled from './Styled';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";

export default function Product(props) {

    const { product, onAddBasket } = props;

    let { existingItemWishList, WishList, setWishList,
        setExistingItemWishList } = useContext(ExistingItemWishListContext);

    const addBasketMsg = () => toast.success('Adicionado ao carrinho!');
    const addWishListMsg = () => toast.info(existingItemWishList);

    const onAddWishList = (product) => {
    const exist = WishList.find((x) => x.id === product.id);
        if (exist) {
      setExistingItemWishList(existingItemWishList = "Produto já favoritado!");
        }else {
      setWishList([...WishList, { ...product, qty: 1 }]);
      setExistingItemWishList(existingItemWishList = "Adicionado aos favoritos!");
    }
  };

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
        <Price product={product} />
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
