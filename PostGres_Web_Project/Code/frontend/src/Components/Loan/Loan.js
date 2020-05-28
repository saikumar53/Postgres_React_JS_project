import React, { Component } from 'react';
import { Card } from 'reactstrap';


class Loan extends Component {


    constructor() {
        super(); 
        this.state = { showMessage: false, Score : 0 ,Customer:""}
      }
    
      _showMessage = (bool, score,name) => {
        this.setState({
          showMessage: bool,
          Score : score,
          Customer: name
        });
      }



    handleButtonClick = () => {
        this.form.reset()
    } 

    check(event){
        event.preventDefault();
        console.log("In method")
        let data = {
            customer_id : this.refs.customer_id.value,
            customer_name : this.refs.customer_name.value,
        };
        console.log(data);
        this.handleButtonClick();
        var request = new Request('http://localhost:3000/loan/first', {
            method : 'POST',
            headers : new Headers({'Content-Type':'application/json'}),
            body : JSON.stringify(data)
        });
        fetch(request)
          .then(response => response.json())
          .then(items => {console.log(items)
            if(items.dbError === 'db error'){
                alert("Customer does not exists in the database")
                this._showMessage(false,items.dbError,items.dbError)
          }else{
            this._showMessage(true,items.Score,items.Customer)
            console.log(items)
          }})
          .catch(function(err){
              console.log(err)
              alert("Customer does not exists in the database")
            // alert.show("Data not exists")
          })
      }

    render() {
        return (
            <div style={{ display: 'flex',alignItems:'center', textAlign:'center',justifyContent: 'center', padding: 30 }}>
                <div >
                    <h2>Let's see if a customer can get a unsecured loan ??</h2>
                    <h3 >Enter customer details</h3><br/><br/>
                    <div style={{ display: 'flex',alignItems:'center', textAlign:'center',justifyContent: 'center', padding: 30 }}>
                    <form ref={form => this.form = form} style={{position:'relative',width:'18rem'}}>
                        <input type="text" ref="customer_id" placeholder = "Customer ID"/>
                        <input type="text" ref="customer_name" placeholder = "Customer name"/>
                    </form> 
                    </div>
                    <br/>
                    <button onClick={this.check.bind(this)}>Calculate </button>
                    <br/><br/>
                    { this.state.showMessage && (<h4>Probability that {this.state.Customer} will get a unsecured loan is {this.state.Score}%</h4>) }
                </div>
            </div>
        );
    }
}

export default Loan;