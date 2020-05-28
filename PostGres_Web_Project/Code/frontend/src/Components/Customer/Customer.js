import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import DataTable from './DataTable'
import { Button } from 'react-bootstrap';
import history from './../history';


class Customers extends Component {

    state = {
        items : []
    }

    getItems(){
        fetch('http://localhost:3000/loan/getallCustomer')
          .then(response => response.json())
          .then(items => this.setState({items}))
          .catch(err => console.log(err))
      }

      componentDidMount(){
        this.getItems()
        console.log('Component has mounted')
      }

      handleButtonClick = () => {
        this.form.reset()
      } 

      getDataItem(event){
        event.preventDefault();
        console.log("In method")
        let data = {
            customer_id : this.refs.customer_id.value,
            customer_name : this.refs.customer_name.value
        };
        this.handleButtonClick();
        console.log(data);
        var request = new Request('http://localhost:3000/loan/getCustomer', {
            method : 'POST',
            headers : new Headers({'Content-Type':'application/json'}),
            body : JSON.stringify(data)
        });
        fetch(request)
          .then(response => response.json())
          .then(items =>  {
            if(items.dataExists === 'false'){
              alert("Customer is not present")
              this.getItems()
            }else{
                this.setState({items})
            }
        })
          .catch(function(err){
              console.log(err)
            // alert.show("Data not exists")
          })

      }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Customer Info</h2>
                    <form ref={form => this.form = form} style={{ width: '18rem' }}>
                        <input type="text" ref="customer_id" placeholder = "customer_id"/>
                        <input type="text" ref="customer_name" placeholder = "customer_name"/>
                    </form>
                    <br/>
                    <button onClick={this.getDataItem.bind(this)}>Retrieve Data</button>
                    <br/><br/>
                    <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/AddForm')}>Insert Customer Data</Button>
                    </form>
                </div>
                <Container>
                    <Row>
                        <Col>
                        <DataTable items={this.state.items} />
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Customers;