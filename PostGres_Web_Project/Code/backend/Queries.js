/*Customer Table Queries*/
const getCustomerData = (req, res, db) => {
    db.select('*').from('customer').orderBy('name','asc').limit(10)
      .then(items => {
        if(items.length){
          res.json(items)
        } else {
          res.json({dataExists: 'false'})
        }
      })
      .catch(err => res.status(400).json({dbError: 'db error'}))
  }


const getCustomer = (req, res, db) => {
  console.log(req.body);
  var cid = req.body.customer_id;
  var name = req.body.customer_name;
  db.select('*').from('customer').where({'cid':cid,'name':name})
    .then(items => {
      console.log(items.length)
      if(items.length){
        console.log(items)
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.json({dataExists: 'false'}))
}


const addCustomer = (req, res, db) => {
  console.log(req.body)
  const cid = req.body.customer_id;
  const name = req.body.customer_name;
  const age = req.body.customer_age;
  const addr = req.body.customer_addr;
  db('customer').insert({'cid':cid,'name':name,'age':age,'addr':addr})
  .returning('*')
    .then(items => {
      console.log(items)
        res.json(items)
      })
    .catch(err => {
      console.log(err)
      res.json({dbError: 'db error'})}
      )
}

//Customer Account Table queries
const getallCustomerAcc = (req, res, db) => {
  db.select('*').from('account').limit(10)
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}


const getCustomerAcc = (req, res, db) => {
var cid = req.body.customer_id;
var customer_accno = req.body.customer_accno;
db.select('*').from('account').where({'cid':cid,'acc_no':customer_accno})
  .then(items => {
    console.log(items.length)
    if(items.length){
      console.log(items)
      res.json(items)
    } else {
      res.json({dataExists: 'false'})
    }
  })
  .catch(err => res.json({dataExists: 'false'}))
}


const CustomerAcc = (req, res, db) => {
console.log(req.body)
const cid = req.body.customer_id;
const acc_no = req.body.customer_accno;
db('account').insert({'cid':cid,'acc_no':acc_no})
.returning('*')
  .then(items => {
    console.log(items)
      res.json(items)
    })
  .catch(err => {
    console.log(err)
    res.json({dbError: 'db error'})}
    )
}



/*Credit Card Table Queries */
const getallCredit = (req, res, db) => {
  db.select('*').from('creditcard').limit(10)
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const getCard = (req, res, db) => {
  console.log(req.body);
  var cid = req.body.customer_id;
  db.select('*').from('creditcard').where({'cid':cid})
    .then(items => {
      console.log(items.length)
      if(items.length){
        console.log(items)
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.json({dataExists: 'false'}))
}


const addCard = (req, res, db) => {
  console.log(req.body)
  const {cid,card_limit,other_cards,last_ann_paid,last_credit_upgrade,card_type,balance} = req.body
  db('creditcard').insert({'cid':cid,'card_limit':card_limit,'other_cards':other_cards,
  'last_ann_paid':last_ann_paid,'last_credit_upgrade':last_credit_upgrade,'card_type':card_type,'balance':balance})
  .returning('*')
    .then(items => {
      console.log(items)
        res.json(items)
      })
    .catch(err => {
      console.log(err)
      res.json({dbError: 'db error'})}
      )
}


/*Mortgage Table Structure*/
const getallMortgage = (req, res, db) => {
  db.select('*').from('mortgage').limit(10)
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}


const getMortgage = (req, res, db) => {
console.log(req.body);
var cid = req.body.customer_id;
// var name = req.body.customer_name;
db.select('*').from('mortgage').where({'cid':cid})
  .then(items => {
    console.log(items.length)
    if(items.length){
      console.log(items)
      res.json(items)
    } else {
      res.json({dataExists: 'false'})
    }
  })
  .catch(err => res.json({dataExists: 'false'}))
}

const Mortgage = (req, res, db) => {
  console.log(req.body)
  const {cid,current_loans,loan_amount,amount_paid,amount_remain,interest_rate,loan_type,loan_period,mortgages,total_balance} = req.body
  db('mortgage').insert({'cid':cid,'current_loans':current_loans,'loan_amount':loan_amount,'amount_paid':amount_paid,'amount_remain':amount_remain,'interest_rate':interest_rate,
  'loan_type':loan_type,'loan_period':loan_period,'mortgages':mortgages,'total_balance':total_balance})
  .returning('*')
    .then(items => {
      console.log(items)
        res.json(items)
      })
    .catch(err => {
      console.log(err)
      res.json({dbError: 'db error'})}
      )
}

/*Web Browsing Table Queries*/
const getWebData = (req, res, db) => {
  db.select('*').from('web_browsing').limit(10)
    .then(items => {
      if(items.length){
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.status(400).json({dbError: 'db error'}))
}

const getDevice = (req, res, db) => {
  var customer_id = req.body.customer_id;
  db.select('*').from('web_browsing').where({'cid':customer_id})
    .then(items => {
      console.log(items.length)
      if(items.length){
        console.log(items)
        res.json(items)
      } else {
        res.json({dataExists: 'false'})
      }
    })
    .catch(err => res.json({dataExists: 'false'}))
}

const Device = (req, res, db) => {
  console.log(req.body)
  const {device_id,cid,tot_time_spent,no_of_visits,tot_applications,no_products_seen,search_query} = req.body
  db('web_browsing').insert({'device_id':device_id,'cid':cid,'tot_time_spent':tot_time_spent,'no_of_visits':no_of_visits,
    'tot_applications':tot_applications,'no_products_seen':no_products_seen,'search_query':search_query})
  .returning('*')
    .then(items => {
      console.log(items)
        res.json(items)
      })
    .catch(err => {
      console.log(err)
      res.json({dbError: 'db error'})}
      )
}

//Calculating Loan
function calculate(items,res){
    console.log(items)
    var score = 0
    const customer = items[0].name
    const date1 = new Date();
    const date2 = new Date(items[1].last_credit_upgrade);
    const balance_change = Number(items[2].balance)
    const tot_applications = Number(items[3].tot_applications)
    const search_queries = Number(items[3].search_queries)
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays)
    if(diffDays < 90){
      score += 70
    }
    else if(diffDays > 90 && diffDays < 180){
        score += 65
    }
    else if (diffDays > 180 && diffDays < 365)
    {
        score += 60
    }
    else{
        score += 50
    }
    if(balance_change > 2000){
        score += 10
    }
    if(tot_applications > 1){
        score += 2
    }
    if(search_queries > 5){
      score += 2
    }
    console.log(score)
    res.json({"Customer":customer,"Score":score})
}


const checkLoan1 = (req, res, db) => {
  var items=[]
  var cid = req.body.customer_id;
  var name = req.body.customer_name;
  return db.select('cid','name').from('customer').where({'cid':cid},{'name':name})
  .then(function(items1){
    items.push(items1[0])
    return db.raw("select last_credit_upgrade,card_type from creditcard where last_credit_upgrade = (select max(last_credit_upgrade) from creditcard where cid = ?) and card_type = 'C'",cid)
    .then(function(items2){
      items.push(items2.rows[0])
      return db.raw('select sum(balance) as balance from creditcard where cid = ?',cid)
      .then(function(items3){
        items.push(items3.rows[0])
        return db.raw('select sum(tot_applications) as tot_applications,sum(search_query) as search_queries from web_browsing where cid = ?',cid)
        .then(function(items4){
          items.push(items4.rows[0])
          calculate(items,res)
        })  
      })
    })
  }).catch(err => res.json({dbError: 'db error'}))    
}

module.exports = {
  getCustomerData,
  getCustomer,
  addCustomer,
  getallCustomerAcc,
  getCustomerAcc,
  CustomerAcc,
  getallCredit,
  getCard,
  addCard,
  getallMortgage,
  getMortgage,
  Mortgage,
  getWebData,
  getDevice,
  Device,
  checkLoan1
}