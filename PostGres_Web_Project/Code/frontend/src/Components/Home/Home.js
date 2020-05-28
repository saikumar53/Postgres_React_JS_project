import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Welcome to our Application</h1>
          <p>A simple web page to access our database</p>
            <Button variant="btn btn-success" onClick={() => history.push('/Customers')}>Click button to view Customer Details</Button><br/><br/>
            <Button variant="btn btn-success" onClick={() => history.push('/CustomersAcc')}>Click button to view Customer Account Details</Button><br/><br/>
            <Button variant="btn btn-success" onClick={() => history.push('/Cards')}>Click button to view Credit Card Details</Button><br/><br/>
            <Button variant="btn btn-success" onClick={() => history.push('/Mortgage')}>Click button to view Mortgage Details</Button><br/><br/>
            <Button variant="btn btn-success" onClick={() => history.push('/Web_browsing')}>Click button to view Web Data Details</Button><br/><br/>
            <Button variant="btn btn-success" onClick={() => history.push('/Loan')}>Check For Loan Eligibility</Button><br/><br/>
        </div>
      </div>
    );
  }
}
