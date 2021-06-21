import React from 'react'
import * as Styled from './Styled';
import { MdRemoveShoppingCart } from 'react-icons/md';

export const onAddBasket = (product, basketItems, setBasketItems) => {
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

export const onRemoveBasket = (product, basketItems, setBasketItems) => {
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

export const onEmptyBasket = (product, basketItems, setBasketItems) => {
	setBasketItems(basketItems.filter((x) => (x.id = product.id)));
};

export const emptyBasket = (
	<React.Fragment>
		<h3 style={{ textAlign: 'center' }}>Carrinho Vazio!</h3>
		<Styled.EmptyBasket>
			<MdRemoveShoppingCart />
		</Styled.EmptyBasket>
	</React.Fragment>
);