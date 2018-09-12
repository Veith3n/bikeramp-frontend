import React, {Component} from 'react';
import {app} from "../../config/axios_consts";


class NewTrip extends Component {
  state = {
    startAddress: "",
    destinationAddress: "",
    price: 0,
    responseError: null
  };

  onStartAddressChange = (e) => {
    this.setState({startAddress: e.target.value});
  };

  onDestinationAddressChange = (e) => {
    this.setState({destinationAddress: e.target.value});
  };

  onPriceChange = (e) => {
    this.setState({price: e.target.value});
  };

  clearForms = () => {
    this.setState({
      startAddress: "",
      destinationAddress: "",
      price: 0,
    });
  };

  onSubmit = (e) => {
    app.post('trips', {
      start_address: this.state.startAddress,
      destination_address: this.state.destinationAddress,
      price: this.state.price
    })
      .then((res) => {
        this.setState({responseError: 'none'});
        this.clearForms();
      })
      .catch((error) => {
        this.setState({responseError: error})
        // Error
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);

        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);

        }
        console.log(error.config);
      });

    e.preventDefault();
  };

  render() {
    return (
      <div>
        {this.state.responseError === 'none' &&
        <div className="alert alert-success"> {'Trip created'}</div>
        }
        {this.state.responseError !== 'none' && this.state.responseError !== null &&
        <div className="alert alert-danger">{'Error creating trip'}</div>
        }
        <form className="mt-2">
          <div className="form-group">
            <label htmlFor="startAddress">Starting address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Start Address"
              id="startAddress"
              value={this.state.startAddress}
              onChange={this.onStartAddressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="destinationAddress">Destination Address</label>
            <input
              type="text"
              id="destinationAddress"
              className="form-control"
              placeholder="Destination Address"
              value={this.state.destinationAddress}
              onChange={this.onDestinationAddressChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              step="0.01"
              min="0"
              id="price"
              className="form-control"
              placeholder="Price"
              value={this.state.price}
              onChange={this.onPriceChange}
            />
          </div>
          <button
            className="btn btn-primary"
            disabled={this.state.startAddress.length === 0 || this.state.destinationAddress.length === 0 || this.state.price === null}
            onClick={this.onSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default NewTrip;