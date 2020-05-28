import React, { Component } from "react";
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

class AddDevice extends Component {

  constructor(props) {
    super(props);

    this.state = {
        device_id : null,
        cid :null,
        tot_time_spent :null,
        no_of_visits :null,
        tot_applications :null,
        no_products_seen :null,
        search_query : null,
      formErrors: {
        device_id :"",
        cid :"",
        tot_time_spent : "",
        no_of_visits : "",
        tot_applications : "",
        no_products_seen : "",
        search_query : ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        device_id: ${this.state.device_id}
        cid: ${this.state.cid}
        tot_time_spent: ${this.state.tot_time_spent}
        no_of_visits: ${this.state.no_of_visits}
        tot_applications: ${this.state.tot_applications}
        no_products_seen: ${this.state.no_products_seen}
        search_query: ${this.state.search_query }
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
      case "device_id":
        formErrors.device_id =
          value.length === 0 ? "Cannot be empty": "";
        break;
      case "cid":
        formErrors.cid =
        value.length === 0 ? "Cannot be empty" : "";
        break;
     case "tot_time_spent":
            formErrors.tot_time_spent =
            value.length === 0 ? "" : "";
         break; 

      case "no_of_visits":
        formErrors.no_of_visits =
            value.length === 0 ? "" : "";
        break;

      case "tot_applications":
        formErrors.tot_applications =
            value.length === 0 ? "" : "";
          break;

        case "no_products_seen":
            formErrors.no_products_seen =
            value.length === 0 ? "" : "";
            break;

        case "search_query":
            formErrors.search_query =
            value.length === 0 ? "" : "";
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
    var device = this.refs.device_id.value
    if(device === ''){
      device = null
    }
    console.log(device)
    console.log("In method")
    let data = {
        device_id : device,
        cid : this.refs.cid.value,
        tot_time_spent : Number(this.refs.tot_time_spent.value),
        no_of_visits : Number(this.refs.no_of_visits.value),
        tot_applications : Number(this.refs.tot_applications.value),
        no_products_seen : Number(this.refs.no_products_seen.value),
        search_query : Number(this.refs.search_query.value),
    };
    console.log(data);
    this.handleButtonClick();
    var request = new Request('http://localhost:3000/Device', {
        method : 'POST',
        headers : new Headers({'Content-Type':'application/json'}),
        body : JSON.stringify(data)
    });
    fetch(request)
      .then(response => response.json())
      .then(items => {console.log(items)
        if(items.dbError === 'db error'){
          alert("Data not inserted due to Customer Id not exists/Device Id or Customer ID are empty")
      }else{
        alert("Data Inserted Sucessfully")
      }})
      .catch(function(err){
          console.log(err)
          alert("Data not inserted due to Customer Id not exists/Device Id or Customer ID are empty")
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
              <label htmlFor="cid">Customer ID (number)</label><br/>
              <input
                className={formErrors.cid.length > 0 ? "Cannot be Empty" : null}
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
        
          <div className="device_id">
              <label htmlFor="device_id">Device Id (text)</label><br/>
              <input
                className={formErrors.device_id.length > 0 ? "Cannot be Empty" : null}
                placeholder="Device Id"
                type="number"
                name="device_id"
                ref="device_id"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.device_id.length > 0 && (
                <span className="errorMessage">{formErrors.device_id}</span>
              )}
            </div>
       
          

            <div className="tot_time_spent">
              <label htmlFor="tot_time_spent">Totat Time Spent in days(number)</label><br/>
              <input
                className={formErrors.tot_time_spent.length > 0 ? "" : ""}
                placeholder="Time Spent"
                type="number"
                name="tot_time_spent"
                ref="tot_time_spent"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.tot_time_spent.length > 0 && (
                <span className="errorMessage">{formErrors.tot_time_spent}</span>
              )}
            </div>

            <div className="no_of_visits">
              <label htmlFor="no_of_visits">Number of Visits(number)</label><br/>
              <input
                className={formErrors.no_of_visits.length > 0 ? "" : ""}
                placeholder="Number of Visits"
                type="number"
                style = {{width:'12rem'}}
                name="no_of_visits"
                ref="no_of_visits"
                min={0}
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.no_of_visits.length > 0 && (
                <span className="errorMessage">{formErrors.no_of_visits}</span>
              )}
            </div>
        
            <div className="tot_applications">
              <label htmlFor="tot_applications">Total Applications Submitted (number)</label><br/>
              <input
                className={formErrors.tot_applications.length > 0 ? "" : ""}
                placeholder="Total Applications"
                type="number"
                name="tot_applications"
                ref="tot_applications"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.tot_applications.length > 0 && (
                <span className="errorMessage">{formErrors.tot_applications}</span>
              )}
            </div>

            <div className="no_products_seen">
              <label htmlFor="no_products_seen">Number of products seen (number)</label><br/>
              <input
                className={formErrors.no_products_seen.length > 0 ? "" : ""}
                placeholder="Number of products seen"
                type="number"
                name="no_products_seen"
                ref="no_products_seen"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.no_products_seen.length > 0 && (
                <span className="errorMessage">{formErrors.no_products_seen}</span>
              )}
            </div>


        

            <div className="search_query">
              <label htmlFor="search_query">Number of Search Queries (number)</label><br/>
              <input
                className={formErrors.search_query.length > 0 ? "" : ""}
                placeholder="Number of Search Queries"
                type="number"
                name="search_query"
                ref="search_query"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.search_query.length > 0 && (
                <span className="errorMessage">{formErrors.search_query}</span>
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

export default AddDevice;