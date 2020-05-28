import React, { Component } from "react";
//import { Card, ListGroup } from 'react-bootstrap';
import "./../AddForm.css";


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class AddCustomeracc extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cid: null,
      acc_no: null,
      formErrors: {
      cid: "",
      acc_no: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        cid: ${this.state.cid}
        acc_no: ${this.state.acc_no}

      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "cid":
        formErrors.cid =
        value.length === 0 ? "Cannot be empty" : "";
        break;
      case "acc_no":
        formErrors.acc_no =
            value.length === 0 ? "Cannot be empty" : "";
          break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  handleButtonClick = () => {
    this.form.reset()
  } 


  addDataItem(event){
    event.preventDefault();
    console.log("In method")
    let data = {
        customer_id : this.refs.customer_id.value,
        customer_accno : this.refs.customer_accno.value,
    };
    console.log(data);
    this.handleButtonClick();
    var request = new Request('http://localhost:3000/CustomerAcc', {
        method : 'POST',
        headers : new Headers({'Content-Type':'application/json'}),
        body : JSON.stringify(data)
    });
    fetch(request)
      .then(response => response.json())
      .then(items => {console.log(items)
        if(items.dbError === 'db error'){
          alert("Data Not Inserted either due to Customer ID/Account Number already exists or Empty Fields")
      }else{
        alert("Data Inserted Sucessfully")
      }})
      .catch(function(err){
          console.log(err)
          alert("Data Not Inserted either due to Customer ID/Account Number already exists or Empty Fields")
        // alert.show("Data not exists")
      })
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Enter Data</h1>
          <form ref={form => this.form = form} onSubmit={this.handleSubmit} noValidate>

          <div className="cid">
              <label htmlFor="cid">Customer ID(Number)</label><br/>
              <input
                className={formErrors.cid.length > 0 ? "error" : null}
                placeholder="Customer ID"
                type="number"
                name="cid"
                ref="customer_id"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.cid.length > 0 && (
                <span className="errorMessage">{formErrors.cid}</span>
              )}
            </div>


            <div className="acc_no">
              <label htmlFor="acc_no">Account number(Number)</label><br/>
              <input
                className={formErrors.acc_no.length > 0 ? "error" : null}
                placeholder="Account number"
                type="number"
                name="acc_no"
                ref="customer_accno"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.acc_no.length > 0 && (
                <span className="errorMessage">{formErrors.acc_no}</span>
              )}
            </div>
    
          </form>
          <br/>
          <div className="Submit">
              <button onClick={this.addDataItem.bind(this)} type="submit">Add record</button>
            </div>
        </div>
      </div>
    );
  }

}

export default AddCustomeracc;