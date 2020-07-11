import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Navbar = ({ shoppingCart: { addToCart } }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shopping Cart
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/add">
              <i className="fa fa-plus-circle" aria-hidden="true"></i> Add
              products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart{' '}
              <span className="badge badge-danger ">{addToCart.totalQty}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  shoppingCart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps)(Navbar);
