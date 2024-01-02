import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();// here only we are pulling data

  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); //reduce method has accumulator and element. it performs adding each array's elements and store it in accumulator--initially its zero
    //in this case it only add the price of the items 

    //to navigate from one component to other
    const navigate = useNavigate();

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length}items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //receives the total added price from the function--getBasketTotal
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate('/payment')} >Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;