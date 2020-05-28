import React from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    console.log(props);
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">LoanChecker..!!</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Customers">Customers</Nav.Link>
                    <Nav.Link href="/CustomersAcc">Customers Account</Nav.Link>
                    <Nav.Link href="/Cards"> Credit Card</Nav.Link>
                    <Nav.Link href="/Mortgage"> Mortgage</Nav.Link>
                    <Nav.Link href="/Web_browsing">Web Data</Nav.Link>
                    <Nav.Link href="/Loan">Check Loan Eligibility</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);