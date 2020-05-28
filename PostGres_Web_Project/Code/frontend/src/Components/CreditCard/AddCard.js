import React, { Component } from "react";
import "./../AddForm.css";
import ReactScrollBar from "react-scrollbar";

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

class AddCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cid: null,
      card_limit: null,
      other_cards: null,
      last_ann_paid: null,
      last_credit_upgrade: null,
      card_type:null,
      balance:null,
      formErrors: {
      cid: "",
      card_limit: "",
      other_cards: "",
      last_ann_paid: "",
      last_credit_upgrade: "",
      card_type:"",
      balance:"",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        card_limit: ${this.state.card_limit}
        cid: ${this.state.cid}
        other_cards: ${this.state.other_cards}
        last_ann_paid: ${this.state.last_ann_paid}
        last_credit_upgrade: ${this.state.last_credit_upgrade}
        card_type: ${this.state.card_type}
        balance: ${this.state.balance}
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
     case "card_limit":
            formErrors.card_limit =
            value.length === 0 ? "Cannot be empty" : "";
         break; 

      case "other_cards":
        formErrors.other_cards =
            value.length === 0 ? "" : "";
        break;

      case "last_ann_paid":
        formErrors.last_ann_paid =
            value.length === 0 ? "Cannot be empty" : "";
          break;

        case "last_credit_upgrade":
            formErrors.last_credit_upgrade =
            value.length === 0 ? "Cannot be empty" : "";
            break;

        case "card_type":
            formErrors.card_type =
            value.length === 0 ? "Cannot be empty" : "";
            break;
        case "balance":
            formErrors.balance =
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
        cid : this.refs.cid.value,
        card_limit : this.refs.card_limit.value,
        other_cards : Number(this.refs.other_cards.value),
        last_ann_paid : this.refs.last_ann_paid.value,
        last_credit_upgrade : this.refs.last_credit_upgrade.value,
        card_type : this.refs.card_type.value,
        balance : Number(this.refs.balance.value)
    };
    console.log(data);
    this.handleButtonClick();
    var request = new Request('http://localhost:3000/newCard', {
        method : 'POST',
        headers : new Headers({'Content-Type':'application/json'}),
        body : JSON.stringify(data)
    });
    fetch(request)
      .then(response => response.json())
      .then(items => {console.log(items)
        if(items.dbError === 'db error'){
          alert("Data not inserted due to Empty Fields/ Customer Id is not present")
      }else{
        alert("Data Inserted Sucessfully")
      }})
      .catch(function(err){
          console.log(err)
          alert("Credit Card Number already exists or Empty fields")
        // alert.show("Data not exists")
      })
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper" >
        <div className="form-wrapper" style={{width:'30rem'}}>
          <h1>Enter Data</h1>
  
          <form ref={form => this.form = form} onSubmit={this.handleSubmit} noValidate>
            
       
          <div style={{marginRight:'18px'}} className="cid">
              <label htmlFor="cid">Customer ID (number)</label><br/>
              <input
                className={formErrors.cid.length > 0 ? "Cannot be Empty" : null}
                placeholder="Customer ID"
                type="number"
                name="cid"
                ref="cid"
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.cid.length > 0 && (
                <span className="errorMessage">{formErrors.cid}</span>
              )}
            </div>

            <div className="card_limit">
              <label htmlFor="card_limit">Card Limit (number)</label><br/>
              <input
                className={formErrors.card_limit.length > 0 ? "Cannot be Empty" : null}
                placeholder="Card Limit"
                type="number"
                name="card_limit"
                ref="card_limit"
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.card_limit.length > 0 && (
                <span className="errorMessage">{formErrors.card_limit}</span>
              )}
            </div>

            <div style={{marginRight:'12px'}}  className="other_cards">
              <label htmlFor="other_cards">Number of Other Cards(number)</label><br/>
              <input
                className={formErrors.other_cards.length > 0 ? "" : ""}
                placeholder="other_cards"
                type="number"
                style = {{width:'12rem'}}
                name="other_cards"
                ref="other_cards"
                min={0} max={20}
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.other_cards.length > 0 && (
                <span className="errorMessage">{formErrors.other_cards}</span>
              )}
            </div>
        
            <div className="last_ann_paid">
              <label htmlFor="last_ann_paid">Last Annual Fee Paid (date)</label><br/>
              <input
                className={formErrors.last_ann_paid.length > 0 ? "Cannot be Empty" : null}
                placeholder="Last Annual Fee Paid"
                type="date"
                name="last_ann_paid"
                ref="last_ann_paid"
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.last_ann_paid.length > 0 && (
                <span className="errorMessage">{formErrors.last_ann_paid}</span>
              )}
            </div>

            <div style={{marginRight:'12px'}} className="last_credit_upgrade">
              <label htmlFor="last_credit_upgrade">Last Credit Upgrade (date)</label><br/>
              <input
                className={formErrors.last_credit_upgrade.length > 0 ? "Cannot be Empty" : null}
                placeholder="Account number"
                type="date"
                name="last_credit_upgrade"
                ref="last_credit_upgrade"
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.last_credit_upgrade.length > 0 && (
                <span className="errorMessage">{formErrors.last_credit_upgrade}</span>
              )}
            </div>

            <div className="balance">
              <label htmlFor="balance">Balance (number)</label><br/>
              <input
                className={formErrors.balance.length > 0 ? "" : ""}
                placeholder="balance"
                type="number"
                name="balance"
                ref="balance"
                noValidate
                onChange={this.handleChange}
              /><br/>
              {formErrors.balance.length > 0 && (
                <span className="errorMessage">{formErrors.balance}</span>
              )}
            </div>
        
            <div style={{marginRight:'18px'}} className="card_type">
              <label htmlFor="card_type">Card Type (C/D)</label><br/>
                <select className={formErrors.card_type.length > 0 ? "Cannot be Empty" : null}
                style = {{width:'12rem'}}
                name="card_type"
                ref="card_type"
                noValidate
                onChange={this.handleChange}>
                <option value="C">C</option>
                <option value="D">D</option>
                </select>
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

export default AddCard;