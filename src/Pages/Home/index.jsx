import React, { useState } from 'react';

// Context
import { ProductSortOption } from '../../Contexts';
import { SearchProductName } from '../../Contexts';
import { BasketOpenCloseAnimation } from '../../Contexts';
import { WishListOpenCloseAnimation } from '../../Contexts';
import { ExistingItemWishListContext } from '../../Contexts';
import { WishListContext } from '../../Contexts';
import { BasketContext } from '../../Contexts';

// Components
import Header from '../../Components/Header';
import Footer from '../../Components/Footer'
import Products from '../../Components/Products';
import Data from '../../Data';
import Sidebar from './Sidebar'

export default function Home() {

  const { products } = Data;

  // Global States
  const [sortOption, setSortOption] = useState("id");
  const [sortOptionValue1, setSortOptionValue1] = useState("1");
  const [sortOptionValue2, setSortOptionValue2] = useState("-1");
  const [searchProduct, setSearchProduct] = useState('');
  let [showBasketAnimation1, setShowBasketAnimation1] = useState(null);
  let [showBasketAnimation2, setShowBasketAnimation2] = useState(null);
  let [showWishListAnimation1, setShowWishListAnimation1] = useState(null);
  let [showWishListAnimation2, setShowWishListAnimation2] = useState(null);
  let [existingItemWishList, setExistingItemWishList] = useState(null);

  const [basketItems, setBasketItems] = useState([]);
  const [WishList, setWishList] = useState([]);

  const onAddBasket = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist) {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasketItems([...basketItems, { ...product, qty: 1 }]);
    }
  };

  const onRemoveBasket = (product) => {
    const exist = basketItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setBasketItems(basketItems.filter((x) => x.id !== product.id));
    } else {
      setBasketItems(
        basketItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="grid grid-template-areas">
        <BasketContext.Provider value={{basketItems, setBasketItems}}>
      <WishListOpenCloseAnimation.Provider value={{
        showWishListAnimation1, setShowWishListAnimation1,
        showWishListAnimation2, setShowWishListAnimation2
      }}>
      <BasketOpenCloseAnimation.Provider value={{
        showBasketAnimation1, setShowBasketAnimation1,
        showBasketAnimation2, setShowBasketAnimation2
      }}>
        <WishListContext.Provider value={{WishList, setWishList}}>
      <Header
        basketItems={basketItems}
        WishList={WishList}
        onAddBasket={onAddBasket}
        onRemoveBasket={onRemoveBasket}
        countbasketItems={basketItems.length}
        countWishList={WishList.length}
        />
        </WishListContext.Provider>
        </BasketOpenCloseAnimation.Provider>
        </WishListOpenCloseAnimation.Provider>
        </BasketContext.Provider>

        <ProductSortOption.Provider value={{
          sortOption, setSortOption, sortOptionValue1,
          setSortOptionValue1, sortOptionValue2, setSortOptionValue2
        }}>

        <SearchProductName.Provider value={{searchProduct, setSearchProduct}}>

        <div className="sidenav">
          <Sidebar />
        </div>
        <ExistingItemWishListContext.Provider value={{existingItemWishList, WishList,
            setWishList, setExistingItemWishList, existingItemWishList}}>
        <div className="content">
          <Products
            products={products}
            onAddBasket={onAddBasket}
            >
          </Products>
          </div>
          </ExistingItemWishListContext.Provider>
          </SearchProductName.Provider>
        </ProductSortOption.Provider>
        <Footer />
    </div>
  );
}
