import React, { useContext } from 'react';
import Product from './SingleProduct';
import { ProductSortOption } from '../../contexts/';

import { Container } from '../../styles/globals';
import * as Styled from './Styled';

export default function Main(props) {

    const { products, onAdd, onAddFavorites } = props;

    const { sortOption, sortOptionValue1, sortOptionValue2 } = useContext(ProductSortOption);

    return (
        <Container>
            <div className="item content">
                <Styled.Products>
                    {products.sort((a, b) => a[sortOption] > b[sortOption] ? sortOptionValue1 : sortOptionValue2)
                        .map((product) => (
                            <Product key={product.id} product={product} onAdd={onAdd} onAddFavorites={onAddFavorites} />
                        )
                        )}
                </Styled.Products>
            </div>

        </Container>
    );
}
