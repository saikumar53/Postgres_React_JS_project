import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import Loan from "./Components/Loan/Loan";
import CreditCard from "./Components/CreditCard/CreditCard";
import Customers from "./Components/Customer/Customer";
import CustomerAcc from "./Components/CustomerAcc/CustomerAcc";
import Mortgage from "./Components/Mortgage/Mortgage";
import Home from "./Components/Home/Home";
import WebBrowsing from "./Components/Web_browsing/Web_browsing";
import history from './Components/history';
import AddForm from "./Components/Customer/AddForm";
import AddCustomeracc from "./Components/CustomerAcc/AddCustomeracc";
import AddCard from "./Components/CreditCard/AddCard";
import AddMortgage from "./Components/Mortgage/AddMortgage";
import AddDevice from "./Components/Web_browsing/AddDevice";


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/Loan" component={Loan} />
                    <Route path="/Cards" component={CreditCard} />
                    <Route path="/Customers" component={Customers} />
                    <Route path="/CustomersAcc" component={CustomerAcc} />
                    <Route path="/AddForm" component={AddForm} />
                    <Route path="/AddCustomeracc" component={AddCustomeracc} />
                    <Route path="/AddCard" component={AddCard} />
                    <Route path="/AddMortgage" component={AddMortgage} />
                    <Route path="/AddDevice" component={AddDevice} />
                    <Route path="/Mortgage" component={Mortgage} />
                    <Route path="/Web_browsing" component={WebBrowsing}/>
                </Switch>
            </Router>
        )
    }
}
