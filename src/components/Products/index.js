import React, { useContext, useState } from 'react';
import Product from './SingleProduct';

import { ProductSortOption } from '../../contexts/';
import { SearchProductName } from '../../contexts/';

import * as Styled from './Styled';

export default function Main(props) {
    const { products, onAdd, onAddFavorites } = props;
    const { searchProduct } = useContext(SearchProductName);
    const { sortOption, sortOptionValue1, sortOptionValue2 } = useContext(ProductSortOption);

    const items = products.sort((a, b) => a[sortOption] > b[sortOption] ? sortOptionValue1 : sortOptionValue2).filter((val) => {
        if (searchProduct === "") {
            return val;
        }
        else if (val.name.toLowerCase().includes(searchProduct.toLocaleLowerCase())) {
            return val;
        }
    })
        .map((product) => (
            <Product key={product.id} product={product} onAdd={onAdd} onAddFavorites={onAddFavorites} />
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
