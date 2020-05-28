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

class AddForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      Name: null,
      cid: null,
      age: null,
      addr: null,
      formErrors: {
        Name: "",
      cid: "",
      age: "",
      addr: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.Name}
        age: ${this.state.age}
        cid: ${this.state.cid}
        addr: ${this.state.addr}

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
      case "Name":
        formErrors.Name =
          value.length === 0 ? "Cannot be empty": "";
        break;
      case "cid":
        formErrors.cid =
        value.length === 0 ? "Cannot be empty" : "";
        break;
     case "age":
            formErrors.age =
            value.length === 0 ? "Cannot be empty" : "";
         break; 

      case "addr":
        formErrors.addr =
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
        customer_name : this.refs.customer_name.value,
        customer_age : this.refs.customer_age.value,
        customer_addr : this.refs.customer_addr.value,
    };
    console.log(data);
    this.handleButtonClick();
    var request = new Request('http://localhost:3000/new-Customer', {
        method : 'POST',
        headers : new Headers({'Content-Type':'application/json'}),
        body : JSON.stringify(data)
    });
    fetch(request)
      .then(response => response.json())
      .then(items => {console.log(items)
        if(items.dbError === 'db error'){
          alert("Data Not Inserted either due to Customer ID already exists or Empty Fields")
      }else{
        alert("Data Inserted Sucessfully")
      }})
      .catch(function(err){
          console.log(err)
          alert("Data Not Inserted either due to Customer ID already exists or Empty Fields")
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

            <div className="Name">
              <label htmlFor="Name">Name</label><br/>
              <input
                className={formErrors.Name.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="Name"
                ref="customer_name"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.Name.length > 0 && (
                <span className="errorMessage">{formErrors.Name}</span>
              )}
            </div>

            <div className="age">
              <label htmlFor="age">Customer age(Number)</label><br/>
              <input
                className={formErrors.age.length > 0 ? "error" : null}
                placeholder="Age"
                type="number"
                name="age"
                ref="customer_age"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.age.length > 0 && (
                <span className="errorMessage">{formErrors.age}</span>
              )}
            </div>
        
            <div className="addr">
              <label htmlFor="addr">Address</label><br/>
              <input
                className={formErrors.addr.length > 0 ? "error" : null}
                placeholder="Address"
                type="text"
                name="addr"
                ref="customer_addr"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.addr.length > 0 && (
                <span className="errorMessage">{formErrors.addr}</span>
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

export default AddForm;