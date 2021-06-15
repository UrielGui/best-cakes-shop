import React, { useContext } from 'react';
import * as Styled from './Styled';

// Context
import { BasketOpenCloseAnimation } from '../../../Contexts';
import { BasketContext } from '../../../Contexts';

// Prices
import PriceProduct from './Prices/PriceProduct';
import TaxPrice from './Prices/TaxPrice';
import TotalPrice from './Prices/TotalPrice';
import InstallmentsPrice from './Prices/PriceInstallments';
import Discount from './Prices/Discount';

import { MdRemoveShoppingCart } from 'react-icons/md';

export default function Basket(props) {
    const { showBasket } = props;
    const { setShowBasket } = props;
    let {
        // eslint-disable-next-line no-unused-vars
        showBasketAnimation1,
        setShowBasketAnimation1,
        // eslint-disable-next-line no-unused-vars
        showBasketAnimation2,
        setShowBasketAnimation2,
    } = useContext(BasketOpenCloseAnimation);

    const { basketItems, setBasketItems } = useContext(BasketContext);

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

    const emptyBasket = (
        <React.Fragment>
            <h3 style={{ textAlign: 'center' }}>Carrinho Vazio!</h3>
            <Styled.EmptyBasket>
                <MdRemoveShoppingCart />
            </Styled.EmptyBasket>
        </React.Fragment>
    );
    let itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);

    const onEmptyBasket = (product) => {
        setBasketItems(basketItems.filter((x) => (x.id = product.id)));
    };

    const taxPrice = itemsPrice / 80;
    const discount = itemsPrice / 50;

    const BasketList = () => {
        return (
            <React.Fragment>
                <Styled.CloseBasketIcon
                    onClick={() => {
                        setShowBasket(showBasket === true);
                        setShowBasketAnimation1((showBasketAnimation1 = 0));
                        setShowBasketAnimation2((showBasketAnimation2 = 100));
                    }}
                >
                    {' '}
                    X
                </Styled.CloseBasketIcon>

                {basketItems.length === 0 && emptyBasket}

                {basketItems.map((item) => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsAddRemove
                            onClick={() => onRemoveBasket(item)}
                        >
                            -
                        </Styled.BasketDetailsAddRemove>
                        <Styled.BasketDetailsAddRemove
                            add
                            onClick={() => onAddBasket(item)}
                        >
                            +
                        </Styled.BasketDetailsAddRemove>
                        {
                            <span style={{ float: 'right' }}>
                                {item.qty}x{' '}
                                <PriceProduct itemsPrice={item.price} />
                            </span>
                        }
                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsMargin />
                    </div>
                ))}

                {basketItems.length !== 0 && (
                    <React.Fragment>
                        <hr />
                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList>
                                Subtotal:
                            </Styled.BasketDetailsLeftList>
                            <Styled.BasketDetailsSub>
                                <PriceProduct itemsPrice={itemsPrice} />{' '}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList>
                                Descontos:
                            </Styled.BasketDetailsLeftList>
                            <Styled.BasketDetailsSub>
                                {' '}
                                <Discount itemsPrice={itemsPrice} />{' '}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList>
                                Impostos:
                            </Styled.BasketDetailsLeftList>
                            <Styled.BasketDetailsSub>
                                {' '}
                                <TaxPrice itemsPrice={itemsPrice} />{' '}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>
                        <Styled.BasketDetailsMargin />

                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList total>
                                Total:
                            </Styled.BasketDetailsLeftList>
                            <strong>
                                <TotalPrice
                                    itemsPrice={itemsPrice}
                                    tax={taxPrice}
                                    discount={discount}
                                />
                            </strong>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsInstallments>
                            {' '}
                            ou em até 10x de{' '}
                            <InstallmentsPrice
                                itemsPrice={itemsPrice}
                                tax={taxPrice}
                            />{' '}
                        </Styled.BasketDetailsInstallments>
                        <Styled.BasketDetailsInstallments font>
                            {' '}
                            (*com juros)
                        </Styled.BasketDetailsInstallments>
                        <br></br>

                        <hr />
                        <Styled.BasketDetailsCheckout>
                            <Styled.BasketDetailsButton
                                empty
                                onClick={() => {
                                    onEmptyBasket(basketItems);
                                }}
                            >
                                Esvaziar Carrinho
                            </Styled.BasketDetailsButton>

                            <Styled.BasketDetailsButton
                                float
                                onClick={() => {
                                    alert('Pedido finalizado!');
                                    onEmptyBasket(basketItems);
                                    setShowBasket(showBasket === true);
                                    setShowBasketAnimation1(
                                        (showBasketAnimation1 = 0)
                                    );
                                    setShowBasketAnimation2(
                                        (showBasketAnimation2 = 100)
                                    );
                                }}
                            >
                                Finalizar Pedido
                            </Styled.BasketDetailsButton>
                        </Styled.BasketDetailsCheckout>
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Styled.Basket
                basketWidth1={props.animation1}
                basketWidth2={props.animation2}
            >
                {BasketList()}
            </Styled.Basket>
        </React.Fragment>
    );
}
