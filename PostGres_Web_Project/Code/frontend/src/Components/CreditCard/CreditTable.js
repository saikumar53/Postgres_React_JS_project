import React, { Component } from 'react'
import { Table } from 'reactstrap';


class CreditTable extends Component {

    

    render() { 
    const items = this.props.items.map(item => {
        console.log(item.last_ann_paid)
      return (
        <tr key={item.cid}>
          <th scope="row">{item.cid}</th>
          <td>{item.card_limit}</td>
          <td>{item.other_cards}</td>
          <td>{item.last_ann_paid.substring(0,10)}</td>
          <td>{item.last_credit_upgrade.substring(0,10)}</td>
          <td>{item.card_type}</td>
          <td>{item.balance}</td>
        </tr>
        )
      })
  
    

    return (
      <Table >
        <thead>
          <tr>
            <th>Customer_ID</th>
            <th>Card Limit</th>
            <th>Other Cards</th>
            <th>Last Ann_Fee Paid </th>
            <th>Last Credit Upgrade</th>
            <th>Card Type</th>
            <th>balance</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )

    }
}

export default CreditTable