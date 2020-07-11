import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from '../Store/actions/shoppingCart';

import ProductItem from './ProductItem';

const Dashboard = ({ getProducts, shoppingCart: { products } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <Fragment>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))
      ) : (
        <div className="col-md-6 m-auto">
          <h2 style={{ marginTop: '50%' }}>No Products Found...</h2>
        </div>
      )}
      <br />
    </Fragment>
  );
};

Dashboard.propTypes = {
  getProducts: PropTypes.func.isRequired,
  shoppingCart: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart,
});

export default connect(mapStateToProps, { getProducts })(Dashboard);
