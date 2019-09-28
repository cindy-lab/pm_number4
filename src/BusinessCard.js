
import React, { Component } from 'react';

class BusinessCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <center>
            <h1>{this.props.firstname} {this.props.lastname} {this.props.address} {this.props.email} {this.props.phonenumber}</h1>
          </center> 
        </div>
    );    
  }
}
export default BusinessCard;
