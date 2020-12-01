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



module.exports = router;
