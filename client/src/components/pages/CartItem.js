import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ cart }) => {
  return (
    <tr>
      <th scope="row">
        <img
          src={cart.item.image}
          style={{ height: '50px', width: '100px' }}
          alt="img"
        />
      </th>
      <td>{cart.item.name}</td>
      <td>{cart.qty}</td>
      <td>{cart.price}</td>
    </tr>
  );
};

CartItem.propTypes = {
  cart: PropTypes.object.isRequired,
};

export default CartItem;
