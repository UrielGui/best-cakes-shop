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