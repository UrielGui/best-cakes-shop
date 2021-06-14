import React, { useContext } from 'react';
import Product from './SingleProduct';

import { ProductSortOption } from '../../Contexts';
import { SearchProductName } from '../../Contexts';

import * as Styled from './Styled';

export default function Main(props) {
    const { products, onAddBasket, onAddWishList } = props;
    const { searchProduct } = useContext(SearchProductName);
    const { sortOption, sortOptionValue1, sortOptionValue2 } = useContext(ProductSortOption);

    const items = products.sort((a, b) => a[sortOption] > b[sortOption] ? sortOptionValue1 : sortOptionValue2).filter((val) => {
        if (searchProduct === "") {
            return val;
        }
        else if (val.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())) {
            return val;
        }
        else {
            return null;
        }
    })
        .map((product) => (
            <Product key={product.id} product={product} onAddBasket={onAddBasket} onAddWishList={onAddWishList} />
        ));

    return (
        <React.Fragment>
            <div className="content">
                <Styled.Products>
                    {items}
                    {items.length === 0
                        ? <h1>Ops! Nenhum resultado foi encontrado :/</h1>
                        : null
                    }
                </Styled.Products>
            </div>
        </React.Fragment>
    );
}
