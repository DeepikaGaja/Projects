// ShoppingCart.js
import React, { useState } from 'react';

function Cart() {

    const [count, setCount] = useState(0);
  
    const incrementCount = () => {
      setCount(count + 1);
    }
    };

export default Cart;
