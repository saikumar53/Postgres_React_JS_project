import React, { Component } from 'react'
import { Table } from 'reactstrap';


class WebDataTable extends Component {

    
    render() { 
    const items = this.props.items.map(item => {
    
      return (
        <tr key={item.cid}>
          <th scope="row">{item.cid}</th>
          <td>{item.device_id}</td>
          <td>{item.tot_time_spent}</td>
          <td>{item.no_of_visits}</td>
          <td>{item.tot_applications}</td>
          <td>{item.no_products_seen}</td>
          <td>{item.search_query}</td>
        </tr>
        )
      })
  
    

    return (
      <Table >
        <thead>
          <tr>
            <th>Customer_ID</th>
            <th>Device_ID</th>
            <th>Time_Spent</th>
            <th>Visits</th>
            <th>Tot_Applications</th>
            <th>Products_Seen</th>
            <th>Search_Queries</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )

    }
}

export default WebDataTable