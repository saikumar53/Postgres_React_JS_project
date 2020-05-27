const express = require('express')

// use process.env variables to keep private variables,
require('dotenv').config()

const bodyParser = require('body-parser') // turns response into usable format
const cors = require('cors')  // allows/disallows cross-site communication


// db Connection w/ localhost
var db = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',//username
    password : '', //password
    database : ''  //database name 
  }
});

// Controllers - aka, the db queries
const query = require('./Queries')

// App
const app = express()

app.use(cors())
app.use(bodyParser.json())

// App Routes - Auth
app.get('/', (req, res) => res.send('hello world'))

//Customers API requests
app.get('/loan/getallCustomer', (req, res) => query.getCustomerData(req, res, db))
app.post('/loan/getCustomer', (req, res) => query.getCustomer(req, res, db))
app.post('/new-Customer', (req, res) => query.addCustomer(req, res, db))

//Customer Acccount API requests
app.get('/loan/getallCustomerAcc', (req, res) => query.getallCustomerAcc(req, res, db))
app.post('/loan/getCustomerAcc', (req, res) => query.getCustomerAcc(req, res, db))
app.post('/CustomerAcc', (req, res) => query.CustomerAcc(req, res, db))

//Credit Card API request
app.get('/loan/getallCredit', (req, res) => query.getallCredit(req, res, db))
app.post('/loan/getCard', (req, res) => query.getCard(req, res, db))
app.post('/newCard', (req, res) => query.addCard(req, res, db))

//Mortgage APT  requests
app.get('/loan/getallMortgage', (req, res) => query.getallMortgage(req, res, db))
app.post('/loan/getMortgage', (req, res) => query.getMortgage(req, res, db))
app.post('/Mortgage', (req, res) => query.Mortgage(req, res, db))

//Web Browsing APT  requests
app.get('/loan/getallWeb', (req, res) => query.getWebData(req, res, db))
app.post('/loan/getDevice', (req, res) => query.getDevice(req, res, db))
app.post('/Device', (req, res) => query.Device(req, res, db))


//Loan Check API request
app.post('/loan/first', (req, res) => query.checkLoan1(req, res, db))

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`)
})