import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getCart } from '../Store/actions/shoppingCart';
import CartItem from './CartItem';

const Cart = ({ getCart, shoppingCart: { cart } }) => {
  useEffect(() => {
    getCart();
  }, [getCart]);

  let sum = 0;
  cart.map((data) => {
    return (sum += data.price);
  });

  return (
    <Fragment>
      <div className="row mt-4">
        <div className="col-md-9 m-auto">
          <h2>List of items</h2>
          <hr />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-9 m-auto">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.length > 0 ? (
                cart.map((data, i) => <CartItem key={i} cart={data} />)
              ) : (
                <h4>No item in cart</h4>
              )}
            </tbody>
          </table>
          <div style={{ marginTop: '50px' }}>
            <div className="card" style={{ width: '18rem' }}>
              <div className="card-header">
                <h3>Total Price</h3>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5>₹ {sum}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  getCart: PropTypes.func.isRequired,
  shoppingCart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps, { getCart })(Cart);
