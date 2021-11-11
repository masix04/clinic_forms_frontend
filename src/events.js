// This file defines the function that takes the database connection as an argument and creates a router

const express = require('express');
const app = new express();

app.post('/authenticate', (req, res)=>{
    res.status(200).json({"StatusCode": 200, "message": "Hi"});
})
function createRouter(db) {
  const router = express.Router();
    // const owner = req.body.phoneNumber;
  // the routes are defined here

  //1st Router to insert new events in Database

//POST
  router.post('/set-patients', (req, res, next) => {
    // const owner = req.user.name;
    db.query(
      'INSERT INTO patients (name, age, address, phoneNumber, appointed_date, gender, prescription) VALUES (?,?,?,?,2021,?,?)',
      [owner, req.body.name, req.body.age, req.body.address, req.body.phoneNumber, req.body.appointed_date, req.body.gender, req.body.prescription],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  //2nd Router to get saved events from Database

//GET
  router.get('/get-patients', function (req, res, next) {
    // const owner = req.user.phoneNumber;
    db.query(
      'SELECT name, age, address, phoneNumber, appointed_date, gender, prescription FROM patients WHERE age=43',
      [10*(req.params.page || 0)],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  router.post('/abc', function (req, res) {
      res.redirect('https://www.google.com');
    // res.send('POST Hello World!');
  })
//   router.get('/abcd', function (req, res) {
//     res.redirect('http://localhost:8080/callback');
//   // res.send('POST Hello World!');
// })

// // SECRET FOR JWT
// let secret = 'some_secret'; // a secret key is set here

// /* Create token to be used */
// router.get('/token/sign', (req, res) => {
//     var userData = {
//         "name": "My Name",
//         "id": "1234"
//     }
//     let token = jwt.sign(userData, secret, { expiresIn: '15s'})
//     res.status(200).json({"token": token});
// });

  return router;
}

module.exports = createRouter;