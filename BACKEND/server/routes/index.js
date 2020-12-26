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
router.get('/', function (req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});
/* API CHO NHÂN VIÊN */
// lấy thông tin toàn bộ nhân viên
router.get('/getAllNhanVien', function (req, res, next) {
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
    .query('SELECT * FROM nhanvien')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});


/* API CHO PHÒNG */
// lấy thông tin phòng dựa theo id
router.get('/getPhong/:id', function (req, res, next) {
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

  const id = parseInt(req.params.id)

  console.log('id', id)

  pool.query('SELECT * FROM phong WHERE maphong = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })

});

// lấy thông tin tất cả mã phòng
router.get('/getMaPhong', function (req, res, next) {
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
    .query('SELECT maphong FROM phong')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});
// lấy thông tin toàn bộ phòng
router.get('/getAllPhong', function (req, res, next) {
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


router.get('/themPhong', function (req, res, next) {
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

});
router.post('/themPhong', function (req, res, next) {
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

  var tenphong = req.body.tenphong,
    succhua = req.body.succhua,
    dientich = req.body.dientich,
    giaphong = req.body.giaphong,
    tinhtrangphong = req.body.tinhtrangphong,
    trangthai = req.body.trangthai

  pool
    .query('insert into phong (tenphong,succhua,dientich, giaphong, tinhtrangphong, trangthai) values ($1,$2,$3,$4,$5,$6)', [tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã insert dữ liệu thành công');
      }
    })
});


/* API CHO DỊCH VỤ */
// lấy thông tin toàn bộ dịch vụ
router.get('/getAllDichVu', function (req, res, next) {
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
    .query('SELECT * FROM dichvu')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});
// Xóa dịch vụ
router.delete('/xoaDichVu/:id', function (req, res, next) {
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

  const id = parseInt(req.params.id)
  pool.query('DELETE FROM dichvu WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })


});
// THêm dịch vụ mới
router.get('/themDichVu', function (req, res, next) {
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

});
router.post('/themDichVu', function (req, res, next) {
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

  var tendichvu = req.body.tendichvu,
    giadichvu = req.body.giadichvu,
    loaidichvu = req.body.loaidichvu


  pool
    .query('insert into dichvu (tendichvu, giadichvu, loaidichvu) values ($1,$2,$3)', [tendichvu, giadichvu, loaidichvu], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã insert dữ liệu thành công');
      }
    })
});


/* API CHO KHÁCH HÀNG */
// lấy thông tin toàn bộ khách hàng
router.get('/getAllKhachHang', function (req, res, next) {
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
    .query('SELECT * FROM khachhang')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});

// thêm Khách Thuê
router.get('/themKhachThue', function (req, res, next) {
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

});
router.post('/themKhachThue', function (req, res, next) {
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

  var hoten = req.body.hoten,
    noithuongtru = req.body.noithuongtru,
    noisinh = req.body.noisinh,
    nguyenquan = req.body.nguyenquan,
    ngaysinh = req.body.ngaysinh,
    gioitinh = req.body.gioitinh,
    sodienthoai = req.body.sodienthoai,
    cmnd = req.body.cmnd,
    trangthai = req.body.trangthai,
    maphong = req.body.maphong


  pool
    .query('insert into khachhang (hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai,cmnd, trangthai, maphong) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, trangthai, maphong], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã insert dữ liệu thành công');
      }
    })
});



/* API CHO HỢP ĐỒNG THUÊ */

// Thêm hợp đồng thuê
router.get('/themHopDong', function (req, res, next) {
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

});
router.post('/themHopDong', function (req, res, next) {
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

  var ngaythue = req.body.ngaythue,
    ngayhethan = req.body.ngayhethan,
    thoihan = parseInt(req.body.thoihan),
    kythanhtoan = parseInt(req.body.kythanhtoan),
    maphong = req.body.maphong,
    makhachhang = req.body.makhachhang


  pool
    .query('insert into hopdongthue (ngaythue, ngayhethan, thoihan, kythanhtoan, maphong, makhachhang) values ($1,$2,$3,$4,$5,$6)', [ngaythue, ngayhethan, thoihan, kythanhtoan, maphong, makhachhang], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã insert dữ liệu thành công');
      }
    })
});
// lấy thông tin toàn bộ hợp đồng
router.get('/getAllHopDongThue', function (req, res, next) {
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
    .query('SELECT * from hopdongthue')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});





// lấy thông tin khách hàng với mã phòng
// router.get('/getKhachHang', function (req, res, next) {
//   // Website you wish to allow to connect
//   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//   res.setHeader('Access-Control-Allow-Origin', '*');

//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'POST');

//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);



//   pool
//     .query('select makhachhang, hoten from khachhang')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });

// API cho Tài Sản
router.get('/themTaiSan', function (req, res, next) {
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

});
router.post('/themTaiSan', function (req, res, next) {
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

  var ten = req.body.ten,
    serial = req.body.serial,

    maphong = req.body.maphong,
    dongia = req.body.dongia


  pool
    .query('insert into taisan (ten, serial, maphong, dongia) values ($1,$2,$3,$4)', [ten, serial, maphong, dongia], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã insert dữ liệu thành công');
      }
    })
});
// lấy thông tin toàn bộ hợp đồng
router.get('/getAllTaiSan', function (req, res, next) {
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
    .query('select * from taisan')
    .then(respond => res.send(respond.rows))
    .catch(error =>
      setImmediate(() => {
        throw error
      })
    )

});


router.get('/deleteTaiSan/:id', function (req, res, next) {
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

  const id = parseInt(req.params.id)

  pool
    .query('delete from taisan where id = $1', [id], (error, response) => {
      if (error) {
        console.log(error);
      } else {
        res.send('Đã Xóa dữ liệu thành công');
      }
    })

});
module.exports = router;
