import React from 'react'
import * as Styled from './Styled';
import { toast } from 'react-toastify';
import { FaHeartBroken } from 'react-icons/fa';

export const onEmptyWishList = (product, setWishList, WishList) => {
	setWishList(WishList.filter((x) => (x.id = product.id)));
};

export const onRemoveWishList = (product, setWishList, WishList) => {
	setWishList(WishList.filter((x) => x.id !== product.id));
};

export const addWishListMsg = () => toast.success('Adicionado ao carrinho!');

export const emptyWishList = (
	<React.Fragment>
		<h3 style={{ textAlign: 'center' }}>Sem favoritos :(</h3>
		<Styled.EmptyWishList>
			<FaHeartBroken />
		</Styled.EmptyWishList>
	</React.Fragment>
);