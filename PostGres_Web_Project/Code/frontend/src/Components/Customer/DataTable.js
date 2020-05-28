import React, { Component } from 'react'
import { Table } from 'reactstrap';

class DataTable extends Component {

    
    render() { 
    const items = this.props.items.map(item => {
    
      return (
        <tr key={item.cid}>
          <th scope="row">{item.cid}</th>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.addr}</td>
        </tr>
        )
      })
  
    

    return (
      <Table >
        <thead>
          <tr>
            <th>Customer_id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )

    }
}

export default DataTable