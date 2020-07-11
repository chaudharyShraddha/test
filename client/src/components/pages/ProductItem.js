import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addIntoCart } from '../Store/actions/shoppingCart';

const ProductItem = ({
  addIntoCart,
  product: { _id, name, image, description, price },
}) => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-9 m-auto">
          <div className="card mt-4">
            <div className="card-body">
              <div className="float-left">
                <img
                  src={image}
                  className="card-img-top"
                  style={{ height: '150px', paddingRight: '30px' }}
                  alt="img"
                />
              </div>
              <div className="">
                <h4 className="card-title">
                  <b>{name}</b>
                </h4>
                <p className="card-text">{description}</p>
                <div className="clearfix">
                  <div className="float-left">
                    <b>Price :</b> ₹ {price}
                  </div>
                  <button
                    className="btn btn-danger float-right"
                    onClick={(e) => {
                      addIntoCart(_id);
                    }}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProductItem.propTypes = {
  addIntoCart: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default connect(null, { addIntoCart })(ProductItem);
