import React, { Fragment, Component } from 'react';
import axios from 'axios';

class Addproducts extends Component {
  state = {
    name: '',
    image: null,
    description: '',
    price: 0,
    nameError: '',
    imageError: '',
    priceError: '',
  };
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  changePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };
  changeImage = (e) => {
    this.setState({
      image: e.target.files[0],
    });
  };
  validationCheck() {
    const { name, image, price } = this.state;
    if (name == '' && image == null && price == '') {
      this.setState({
        nameError: 'Name of product is required',
        imageError: 'Add image for better view',
        priceError: 'Please, Enter price',
      });

      clearTimeout(this.clearError); // clear previous timeout, if exists
      this.clearError = setTimeout(() => {
        this.setState({ nameError: '', imageError: null, priceError: '' });
      }, 4000);
    } else if (name == '') {
      this.setState({ nameError: 'Name of product is required' });

      clearTimeout(this.clearError); // clear previous timeout, if exists
      this.clearError = setTimeout(() => {
        this.setState({ nameError: '' });
      }, 4000);
    } else if (price == '') {
      this.setState({ priceError: 'Please, Enter price' });

      clearTimeout(this.clearError); // clear previous timeout, if exists
      this.clearError = setTimeout(() => {
        this.setState({ priceError: '' });
      }, 4000);
    } else if (image == null) {
      this.setState({ imageError: 'Add image for better view' });

      clearTimeout(this.clearError); // clear previous timeout, if exists
      this.clearError = setTimeout(() => {
        this.setState({ imageError: null });
      }, 4000);
    } else return true;
  }

  dataSubmit = (e) => {
    e.preventDefault();
    if (this.validationCheck()) {
      const data = new FormData();
      data.append('name', this.state.name);
      data.append('description', this.state.description);
      data.append('price', this.state.price);
      data.append('image', this.state.image, this.state.image.name);

      axios
        .post('/api', data)
        .then(alert('data is added'), this.props.history.push('/'));
    }
  };
  render() {
    return (
      <Fragment>
        <div className="col-md-8 m-auto">
          <h2 style={{ marginTop: '20px' }}>Add Product For Shopping Cart</h2>
          <hr />
        </div>
        <form className="col-md-6 mt-4 m-auto" onSubmit={this.dataSubmit}>
          <div className="form-group" style={{ marginTop: '20px' }}>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Enter name for product"
              name="name"
              onChange={this.changeName}
            />
            <p className="text-danger">{this.state.nameError}</p>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe your product here..."
              name="description"
              onChange={this.changeDescription}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Enter price for product"
              name="price"
              onChange={this.changePrice}
            />
            <p className="text-danger">{this.state.priceError}</p>
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control-file"
              name="image"
              onChange={this.changeImage}
            />
            <p className="text-danger">{this.state.imageError}</p>
          </div>
          <button type="submit" className="btn btn-danger">
            ADD PRODUCT
          </button>
        </form>
      </Fragment>
    );
  }
}

export default Addproducts;
