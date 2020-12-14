var express = require('express');
var router = express.Router();


const { Pool, Client } = require('pg')


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HeThongPhongTro',
  password: 'khongtrihoan',
  port: 5432,
})



/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});


router.get('/getdata01', function(req, res, next) {
  pool
  .query('SELECT * FROM taikhoan')
  .then(respond => res.send(respond.rows))
  .catch(error =>
    setImmediate(() => {
      throw error
    })
  )
  
});


router.get('/getAllPhong', function(req, res, next) {
  // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'POST');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    

  pool
  .query('SELECT * FROM phong')
  .then(respond => res.send(respond.rows))
  .catch(error =>
    setImmediate(() => {
      throw error
    })
  )
  
});




module.exports = router;
