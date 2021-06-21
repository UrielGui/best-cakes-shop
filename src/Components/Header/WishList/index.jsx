import React, { useContext } from 'react';
import * as Styled from './Styled';
import { formatPrice } from '../../../Utils/formatPrice';

// Context
import { WishListOpenCloseAnimation } from '../../../Contexts';
import { WishListContext } from '../../../Contexts';
import { BasketContext } from '../../../Contexts';

import { onAddBasket } from '../Basket/OnAddBasket';
import { toast } from 'react-toastify';
import { FaHeartBroken } from 'react-icons/fa';
import { FaShoppingBasket } from 'react-icons/fa';

export default function WishList(props) {
    const { setWishList } = useContext(WishListContext);
    const { showWishList, setshowWishList } = props;
    const { basketItems, setBasketItems } = useContext(BasketContext);

    let {
        // eslint-disable-next-line no-unused-vars
        showWishListAnimation1,
        setShowWishListAnimation1,
        // eslint-disable-next-line no-unused-vars
        showWishListAnimation2,
        setShowWishListAnimation2,
    } = useContext(WishListOpenCloseAnimation);

    const onEmptyWishList = (product) => {
        setWishList(WishList.filter((x) => (x.id = product.id)));
    };
    const onRemoveWishList = (product) => {
        setWishList(WishList.filter((x) => x.id !== product.id));
    };

    const addBasketMsg = () => toast.success('Adicionado ao carrinho!');

    const { WishList } = props;
    const emptyWishList = (
        <React.Fragment>
            <h3 style={{ textAlign: 'center' }}>Sem favoritos :(</h3>
            <Styled.EmptyWishList>
                <FaHeartBroken />
            </Styled.EmptyWishList>
        </React.Fragment>
    );

    const WishListRender = () => {
        return (
            <React.Fragment>
                <Styled.CloseWishListIcon
                    onClick={() => {
                        setshowWishList(showWishList === true);
                        setShowWishListAnimation1((showWishListAnimation1 = 0));
                        setShowWishListAnimation2(
                            (showWishListAnimation2 = 100)
                        );
                    }}
                >
                    X
                </Styled.CloseWishListIcon>

                {WishList.length === 0 && emptyWishList}
                {WishList.map((item) => (
                    <div key={item.id}>
                        <Styled.TitleProduct>
                            {item.name} -{' '}
							{formatPrice(item.price)}{' '}
                        </Styled.TitleProduct>
                        <Styled.ImageProduct src={item.image} alt="" />

                        <Styled.WhistlistRemoveAdd
                            onClick={() => onRemoveWishList(item)}
                        >
                            X
                        </Styled.WhistlistRemoveAdd>

                        <Styled.WhistlistRemoveAdd
                            add
                            onClick={() => {
                                onAddBasket(item, basketItems, setBasketItems);
                                onRemoveWishList(item);
                                addBasketMsg();
                            }}
                        >
                            <FaShoppingBasket />
                        </Styled.WhistlistRemoveAdd>

                        <Styled.WishListDetailsHr />
                    </div>
                ))}

                {WishList.length !== 0 && (
                    <React.Fragment>
                        <Styled.WishListDetailsButton
                            onClick={() => {
                                onEmptyWishList((WishList.length = 0));
                            }}
                        >
                            Esvaziar Favoritos
                        </Styled.WishListDetailsButton>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Styled.WishList
                wishListWidth1={props.animation1}
                wishListWidth2={props.animation2}
            >
                {WishListRender()}
            </Styled.WishList>
        </React.Fragment>
    );
}
