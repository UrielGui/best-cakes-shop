import React, { useContext } from 'react';
import * as Styled from './Styled';

// Context
import { BasketOpenCloseAnimation } from '../../../Contexts';
import { BasketContext } from '../../../Contexts';

// Product
import { onAddBasket, onRemoveBasket, onEmptyBasket, emptyBasket } from './BasketOptions';
import { formatPrice } from '../../../Utils/formatPrice';

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
    let itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);

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
                            onClick={() => onRemoveBasket(item, basketItems, setBasketItems)}
                        >
                            -
                        </Styled.BasketDetailsAddRemove>
                        <Styled.BasketDetailsAddRemove
                            add
                            onClick={() => onAddBasket(item, basketItems, setBasketItems)}
                        >
                            +
                        </Styled.BasketDetailsAddRemove>
                        {
                            <span style={{ float: 'right' }}>
                                {item.qty}x{' '}
								{formatPrice(item.price)}
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
								{formatPrice(itemsPrice)}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList>
                                Descontos:
                            </Styled.BasketDetailsLeftList>
                            <Styled.BasketDetailsSub>
                                {formatPrice(discount)}{' '}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList>
                                Impostos:
                            </Styled.BasketDetailsLeftList>
                            <Styled.BasketDetailsSub>
								{formatPrice(taxPrice)}{' '}
                            </Styled.BasketDetailsSub>
                        </Styled.BasketDetailsList>
                        <Styled.BasketDetailsMargin />

                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsList>
                            <Styled.BasketDetailsLeftList total>
                                Total:
                            </Styled.BasketDetailsLeftList>
                            <strong>
                                {formatPrice(itemsPrice + taxPrice - discount)}{' '}
                            </strong>
                        </Styled.BasketDetailsList>

                        <Styled.BasketDetailsMargin />
                        <Styled.BasketDetailsInstallments>
                            ou em até 10x de{' '}
							{formatPrice(itemsPrice / 10 )}
                        </Styled.BasketDetailsInstallments>
                        <Styled.BasketDetailsInstallments font>
                            (*com juros)
                        </Styled.BasketDetailsInstallments>
                        <br></br>
                        <hr />
                        <Styled.BasketDetailsCheckout>
                            <Styled.BasketDetailsButton
                                empty
                                onClick={() => {
                                    onEmptyBasket(basketItems, basketItems, setBasketItems);
                                }}
                            >
                                Esvaziar Carrinho
                            </Styled.BasketDetailsButton>

                            <Styled.BasketDetailsButton
                                float
                                onClick={() => {
                                    alert('Pedido finalizado!');
                                    onEmptyBasket(basketItems, basketItems, setBasketItems);
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
