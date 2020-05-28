import React, { Component } from "react";
import "./../AddForm.css";
// import ReactDOM from "react-dom";
import ReactScrollbar from 'react-scrollbar';

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

class AddMortgage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cid: null,
      current_loans: null,
      loan_amount: null,
      amount_paid: null,
      amount_remain: null,
      interest_rate: null,
      loan_type:null,
      loan_period:null,
      mortgages : null,
      total_balance : null,
      formErrors: {
      cid: "",
      current_loans: "",
      loan_amount: "",
      amount_paid: "",
      amount_remain: "",
      interest_rate: "",
      loan_type:"",
      loan_period:"",
      mortgages : "",
      total_balance : ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        cid: ${this.state.cid}
        current_loans: ${this.state.current_loans}
        loan_amount: ${this.state.loan_amount}
        amount_paid: ${this.state.amount_paid}
        amount_remain: ${this.state.amount_remain}
        interest_rate: ${this.state.interest_rate}
        loan_type: ${this.state.loan_type}
        loan_period: ${this.state.loan_period}
        mortgages: ${this.state.mortgages}
        total_balance: ${this.state.total_balance}
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
      case "current_loans":
        formErrors.current_loans =
          value.length === 0 ? "": "";
        break;
      case "cid":
        formErrors.cid =
        value.length === 0 ? "" : "";
        break;
     case "loan_amount":
            formErrors.loan_amount =
            value.length === 0 ? "" : "";
         break; 

      case "amount_paid":
        formErrors.amount_paid =
            value.length === 0 ? "" : "";
        break;

      case "amount_remain":
        formErrors.amount_remain =
            value.length === 0 ? "" : "";
          break;

        case "interest_rate":
            formErrors.interest_rate =
            value.length === 0 ? "" : "";
            break;

        case "loan_type":
            formErrors.loan_type =
            value.length === 0 ? "" : "";
            break;
        case "loan_period":
            formErrors.loan_period =
            value.length === 0 ? "" : "";
            break;
        case "mortgages":
            formErrors.mortgages =
            value.length === 0 ? "" : "";
        break;
        case "total_balance":
            formErrors.total_balance =
            value.length === 0 ? "" : "";
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
        current_loans : Number(this.refs.current_loans.value),
        cid : this.refs.cid.value,
        loan_amount : Number(this.refs.loan_amount.value),
        amount_paid : Number(this.refs.amount_paid.value),
        amount_remain : Number(this.refs.amount_remain.value),
        interest_rate : Number(this.refs.interest_rate.value),
        loan_type : this.refs.loan_type.value,
        loan_period : Number(this.refs.loan_period.value),
        mortgages : Number(this.refs.mortgages.value),
        total_balance : Number(this.refs.total_balance.value),
    };
    console.log(data);
    this.handleButtonClick();
    var request = new Request('http://localhost:3000/Mortgage', {
        method : 'POST',
        headers : new Headers({'Content-Type':'application/json'}),
        body : JSON.stringify(data)
    });
    fetch(request)
      .then(response => response.json())
      .then(items => {console.log(items)
        if(items.dbError === 'db error'){
          alert("Data not inserted  because Customer Id is not present")
      }else{
        alert("Data Inserted Sucessfully")
      }})
      .catch(function(err){
          console.log(err)
          alert("Data not inserted  because Customer Id is not present")
        // alert.show("Data not exists")
      })
  }

  render() {
    const { formErrors } = this.state;

    return (
    <ReactScrollbar >
        
      <div className="wrapper">
      <h1>Enter Data</h1>
        <div className="form-wrapper" style={{width:'30rem'}}>
          
          <form ref={form => this.form = form} onSubmit={this.handleSubmit} noValidate>
        
       
          <div style={{marginRight:'20px'}} className="cid">
              <label htmlFor="cid">Customer ID (number)</label><br/>
              <input
                className={formErrors.cid.length > 0 ? "error" : null}
                placeholder="Customer ID"
                type="number"
                name="cid"
                ref="cid"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.cid.length > 0 && (
                <span className="errorMessage">{formErrors.cid}</span>
              )}
            </div>

            <div className="current_loans">
              <label htmlFor="current_loans">Current Loans (number)</label><br/>
              <input
                className={formErrors.current_loans.length > 0 ? "error" : null}
                placeholder="Current Loans"
                type="number"
                name="current_loans"
                ref="current_loans"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.current_loans.length > 0 && (
                <span className="errorMessage">{formErrors.current_loans}</span>
              )}
            </div>

            <div style={{marginRight:'18px'}} className="loan_amount">
              <label htmlFor="loan_amount">Loan Amount (number)</label><br/>
              <input
                className={formErrors.loan_amount.length > 0 ? "error" : null}
                placeholder="Loan Amount"
                type="number"
                name="loan_amount"
                ref="loan_amount"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.loan_amount.length > 0 && (
                <span className="errorMessage">{formErrors.loan_amount}</span>
              )}
            </div> 

            <div className="amount_paid">
              <label htmlFor="amount_paid">Amount Paid(number)</label><br/>
              <input
                className={formErrors.amount_paid.length > 0 ? "error" : null}
                placeholder="Amount Paid"
                type="number"
                style = {{width:'12rem'}}
                name="amount_paid"
                ref="amount_paid"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.amount_paid.length > 0 && (
                <span className="errorMessage">{formErrors.amount_paid}</span>
              )}
            </div>
        
            <div style={{marginRight:'20px'}} className="amount_remain">
              <label htmlFor="amount_remain">Amount Remain (number)</label><br/>
              <input
                className={formErrors.amount_remain.length > 0 ? "error" : null}
                placeholder="Amount Remain"
                type="number"
                name="amount_remain"
                ref="amount_remain"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.amount_remain.length > 0 && (
                <span className="errorMessage">{formErrors.amount_remain}</span>
              )}
            </div>

            <div className="interest_rate">
              <label htmlFor="interest_rate">Interest Rate (number)</label><br/>
              <input
                className={formErrors.interest_rate.length > 0 ? "error" : null}
                placeholder="Interest Rate"
                type="number"
                name="interest_rate"
                ref="interest_rate"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.interest_rate.length > 0 && (
                <span className="errorMessage">{formErrors.interest_rate}</span>
              )}
            </div>


        
            <div style={{marginRight:'15px'}} className="loan_type">
              <label htmlFor="loan_type">Loan Type</label><br/>
                <select className={formErrors.loan_type.length > 0 ? "error" : null}
                style = {{width:'12rem'}}
                name="loan_type"
                ref="loan_type"
                noValidate
                onChange={this.handleChange}>
                <option value="0">0</option>
                <option value="Secured">Secured</option>
                <option value="Unsecured">Unsecured</option>
                </select>
            </div>

            <div className="loan_period">
              <label htmlFor="loan_period">Loan Period (number)</label><br/>
              <input
                className={formErrors.loan_period.length > 0 ? "error" : null}
                placeholder="loan_period"
                type="number"
                name="loan_period"
                ref="loan_period"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.loan_period.length > 0 && (
                <span className="errorMessage">{formErrors.loan_period}</span>
              )}
            </div>

            <div style={{marginRight:'18px'}} className="mortgages">
              <label htmlFor="mortgages">Mortgages (number)</label><br/>
              <input
                className={formErrors.mortgages.length > 0 ? "error" : null}
                placeholder="mortgages"
                type="number"
                name="mortgages"
                ref="mortgages"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.mortgages.length > 0 && (
                <span className="errorMessage">{formErrors.mortgages}</span>
              )}
            </div>

            <div className="total_balance">
              <label htmlFor="total_balance">Total Balance (number)</label><br/>
              <input
                className={formErrors.total_balance.length > 0 ? "error" : null}
                placeholder="Total Balance"
                type="number"
                name="total_balance"
                ref="total_balance"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.total_balance.length > 0 && (
                <span className="errorMessage">{formErrors.total_balance}</span>
              )}
            </div>
          

          </form>
          <br/>
          <div className="Submit">
              <button onClick={this.addDataItem.bind(this)} type="submit">Add record</button>
            </div>
        </div>
      </div>
      </ReactScrollbar>
    );
  }

}

export default AddMortgage;