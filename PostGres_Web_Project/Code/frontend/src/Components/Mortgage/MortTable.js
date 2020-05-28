import React, { Component } from 'react'
import { Table } from 'reactstrap';


class MortTable extends Component {

    render() { 
    const items = this.props.items.map(item => {
    
      return (
        <tr>
          {/* <th scope="row">{item.card_no}</th> */}
          <td>{item.cid}</td>
          <td>{item.current_loans}</td>
          <td>{item.loan_amount}</td>
          <td>{item.amount_paid}</td>
          <td>{item.amount_remain}</td>
          <td>{item.interest_rate}</td>
          <td>{item.loan_type}</td>
          <td>{item.loan_period}</td>
          <td>{item.mortgages}</td>
          <td>{item.total_balance}</td>
        </tr>
        )
      })
  
    

    return (
      <Table >
        <thead>
          <tr>
          <th>Customer Id</th>
            <th>Current Loans</th>
            <th>Loan Amount</th>
            <th>Amount Paid</th>
            <th>Amount Remain</th>
            <th>Interest Rate</th>
            <th>Loan Type </th>
            <th>Loan Period</th>
            <th>Mortgages</th>
            <th>Total Balance</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )

    }
}

export default MortTable