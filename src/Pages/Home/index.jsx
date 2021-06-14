import React, { useState } from 'react';

// Context
import { ProductSortOption } from '../../Contexts';
import { SearchProductName } from '../../Contexts';

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
  const [sortOptionValue1, setSortOptionValue1] = useState("1")
  const [sortOptionValue2, setSortOptionValue2] = useState("-1");
  const [searchProduct, setSearchProduct] = useState('');

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

  const onAddWishList = (product) => {
    const exist = WishList.find((x) => x.id === product.id);
    if (exist) {
      setWishList(
        WishList.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setWishList([...WishList, { ...product, qty: 1 }]);
    }
  };

  const onRemoveWishList = (product) => {
    const exist = WishList.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setWishList(WishList.filter((x) => x.id !== product.id));
    } else {
      setWishList(
        WishList.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
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

  const onEmptyBasket = (product) => {
    setBasketItems(basketItems.filter((x) => x.id = product.id));
  }

  const onEmptyWishList = (product) => {
    setWishList(WishList.filter((x) => x.id = product.id));
  }

  return (
    <div className="grid grid-template-areas">
      <Header 
        basketItems={basketItems} 
        WishList={WishList} 
        onAddBasket={onAddBasket} 
        onRemoveBasket={onRemoveBasket} 
        onAddWishList={onAddWishList} 
        onRemoveWishList={onRemoveWishList} 
        countbasketItems={basketItems.length} 
        countWishList={WishList.length}
        onEmptyBasket={onEmptyBasket}
        onEmptyWishList={onEmptyWishList}
        />
        
        <ProductSortOption.Provider value={{
          sortOption, setSortOption, sortOptionValue1,
          setSortOptionValue1, sortOptionValue2, setSortOptionValue2
        }}>
          
        <SearchProductName.Provider value={{searchProduct, setSearchProduct}}>
        <div className="sidenav">
          <Sidebar />
        </div>
        
        <div className="content">
          <Products 
            products={products} 
            onAddBasket={onAddBasket} 
            onAddWishList={onAddWishList}
            >
          </Products>
          </div>
          </SearchProductName.Provider>
        </ProductSortOption.Provider>

        <Footer />
    </div>
  );
}
