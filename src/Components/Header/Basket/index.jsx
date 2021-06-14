import React from 'react';
import * as Styled from './Styled';
import PriceProduct from './Prices/PriceProduct';
import TaxPrice from './Prices/TaxPrice';
import TotalPrice from './Prices/TotalPrice';
import InstallmentsPrice from './Prices/PriceInstallments';
import Discount from './Prices/Discount';
import { MdRemoveShoppingCart } from 'react-icons/md';

export default function Basket(props) {

  const { showBasket } = props;
  const { setShowBasket } = props;

  const emptyBasket = (
    <React.Fragment>
      <h3 style={{ textAlign: "center" }}>Carrinho Vazio!</h3>
      <Styled.EmptyBasket><MdRemoveShoppingCart /></Styled.EmptyBasket>
    </React.Fragment>
  );
  const { basketItems, onAddBasket, onRemoveBasket, onEmptyBasket } = props;
  let itemsPrice = basketItems.reduce((a, c) => a + c.qty * c.price, 0);

  const taxPrice = itemsPrice / 80;
  const discount = itemsPrice / 50;

  const BasketList = () => {
    return (
      <React.Fragment>
        <Styled.CloseBasketIcon onClick={() => {
          setShowBasket(showBasket === false);
        }}> X</Styled.CloseBasketIcon>

        {basketItems.length === 0 && emptyBasket}

        {basketItems.map((item) => (
          <div key={item.id}>
            <div>{item.name}</div>
            <Styled.BasketDetailsMargin />
            <Styled.BasketDetailsAddRemove onClick={() => onRemoveBasket(item)}>-</Styled.BasketDetailsAddRemove>
            <Styled.BasketDetailsAddRemove add onClick={() => onAddBasket(item)}>+</Styled.BasketDetailsAddRemove>
            {<span style={{ float: "right" }}>{item.qty}x <PriceProduct itemsPrice={item.price} /></span>}
            <Styled.BasketDetailsMargin /><Styled.BasketDetailsMargin />
          </div>
        ))}

        {basketItems.length !== 0 && (
          <React.Fragment>
            <hr />
            <Styled.BasketDetailsMargin />
            <Styled.BasketDetailsList>
              <Styled.BasketDetailsLeftList>Subtotal:</Styled.BasketDetailsLeftList>
              <Styled.BasketDetailsSub><PriceProduct itemsPrice={itemsPrice} /> </Styled.BasketDetailsSub>
            </Styled.BasketDetailsList>

            <Styled.BasketDetailsList>
              <Styled.BasketDetailsLeftList>Descontos:</Styled.BasketDetailsLeftList>
              <Styled.BasketDetailsSub> <Discount itemsPrice={itemsPrice} /> </Styled.BasketDetailsSub>
            </Styled.BasketDetailsList>

            <Styled.BasketDetailsList>
              <Styled.BasketDetailsLeftList>Impostos:</Styled.BasketDetailsLeftList>
              <Styled.BasketDetailsSub> <TaxPrice itemsPrice={itemsPrice} /> </Styled.BasketDetailsSub>
            </Styled.BasketDetailsList><Styled.BasketDetailsMargin />

            <Styled.BasketDetailsMargin />
            <Styled.BasketDetailsList>
              <Styled.BasketDetailsLeftList total>Total:</Styled.BasketDetailsLeftList>
              <strong><TotalPrice itemsPrice={itemsPrice} tax={taxPrice} discount={discount} /></strong>

            </Styled.BasketDetailsList>

            <Styled.BasketDetailsMargin />
            <Styled.BasketDetailsInstallments> ou em até 10x de <InstallmentsPrice itemsPrice={itemsPrice} tax={taxPrice} /> </Styled.BasketDetailsInstallments>
            <Styled.BasketDetailsInstallments font> (*com juros)</Styled.BasketDetailsInstallments><br></br>

            <hr />
            <Styled.BasketDetailsCheckout>
              <Styled.BasketDetailsButton empty
                onClick={() => {
                  onEmptyBasket(basketItems);
                }
                }>Esvaziar Carrinho</Styled.BasketDetailsButton>

              <Styled.BasketDetailsButton float
                onClick={() => {
                  alert('Pedido finalizado!');
                  onEmptyBasket(basketItems);
                  setShowBasket(showBasket === false);
                }
                }>Finalizar Pedido</Styled.BasketDetailsButton>
            </Styled.BasketDetailsCheckout>

          </React.Fragment>
        )}
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Styled.Basket basketHeight1={props.left} basketHeight2={props.left2}>
        {BasketList()}
      </Styled.Basket>
    </React.Fragment>
  );
}
