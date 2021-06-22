import React, { useContext } from 'react';
import * as Styled from './Styled';
import Product from './SingleProduct';

import { ProductSortOption } from '../../Contexts';
import { SearchProductName } from '../../Contexts';

export default function Main(props) {
	const { data, errorMsg } = props;
    const { searchProduct } = useContext(SearchProductName);
    const { sortOption,
		sortOptionValue1, sortOptionValue2
	} = useContext(ProductSortOption);

    const items = data
		.sort((a, b) =>
            a[sortOption] > b[sortOption] ? sortOptionValue1 : sortOptionValue2
        )
        .filter((val) => {
            if (searchProduct === '') {
                return val;
            } else if (
                val.name
                    .toLowerCase()
                    .includes(searchProduct.toLocaleLowerCase())
            ) {
                return val;
            } else {
                return null;
            }
        })
        .map((product) => (
            <Product
                key={product.id}
                product={product}
            />
        ));

    return (
        <React.Fragment>
            <div className="content">
                <Styled.Products>
                    {items}
                    {items.length === 0 ? (
                        <h1> {errorMsg} </h1>
                    ) : null}
                </Styled.Products>
            </div>
        </React.Fragment>
    );
}
