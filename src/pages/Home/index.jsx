import React, { useState } from 'react';

// Context
import { ProductSortOption } from '../../contexts';
import { SearchProductName } from '../../contexts';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Products from '../../components/Products';
import Data from '../../Data';
import Sidebar from './Sidebar'

export default function Home() {

  const { products } = Data;

  // Global States
  const [sortOption, setSortOption] = useState("id");
  const [sortOptionValue1, setSortOptionValue1] = useState("1")
  const [sortOptionValue2, setSortOptionValue2] = useState("-1");
  const [searchProduct, setSearchProduct] = useState('');

  const [cartItems, setCartItems] = useState([]);
  const [WishList, setWishList] = useState([]);

  const onAddFavorites = (product) => {
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

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onEmptyCart = (product) => {
    setCartItems(cartItems.filter((x) => x.id = product.id));
  }

  const onEmptyWishList = (product) => {
    setWishList(WishList.filter((x) => x.id = product.id));
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="grid grid-template-areas">
      <Header 
        cartItems={cartItems} 
        WishList={WishList} 
        onAdd={onAdd} 
        onRemove={onRemove} 
        onAddFavorites={onAddFavorites} 
        onRemoveWishList={onRemoveWishList} 
        countCartItems={cartItems.length} 
        countWishList={WishList.length}
        onEmptyCart={onEmptyCart}
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
            onAdd={onAdd} 
            onAddFavorites={onAddFavorites}
            >
          </Products>
          </div>
          </SearchProductName.Provider>
        </ProductSortOption.Provider>

        <Footer />
    </div>
  );
}
