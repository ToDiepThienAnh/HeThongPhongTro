// var express = require('express');
// var router = express.Router();


// const { Pool, Client } = require('pg')


// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'HeThongPhongTro',
//   password: 'khongtrihoan',
//   port: 5432,
// })



// /* GET home page. */
// router.get('/', function (req, res, next) {
//   pool.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     pool.end()
//   })
//   res.render('index', { title: 'Express' });
// });
// /* API CHO NHÂN VIÊN */
// // lấy thông tin toàn bộ nhân viên
// router.get('/getAllNhanVien', function (req, res, next) {
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
//     .query('SELECT * FROM nhanvien')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });




// /* API CHO PHÒNG */
// // lấy thông tin phòng dựa theo id
// router.get('/getPhong/:id', function (req, res, next) {
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

//   const id = parseInt(req.params.id)

//   console.log('id', id)

//   pool.query('SELECT * FROM phong WHERE maphong = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     res.status(200).json(results.rows)
//   })

// });

// // lấy thông tin tất cả mã phòng
// router.get('/getMaPhong', function (req, res, next) {
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
//     .query('SELECT maphong FROM phong')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });
// // lấy thông tin toàn bộ phòng
// router.get('/getAllPhong', function (req, res, next) {
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
//     .query('SELECT * FROM phong')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });


// router.get('/themPhong', function (req, res, next) {
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

// });
// router.post('/themPhong', function (req, res, next) {
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

//   var tenphong = req.body.tenphong,
//     succhua = req.body.succhua,
//     dientich = req.body.dientich,
//     giaphong = req.body.giaphong,
//     tinhtrangphong = req.body.tinhtrangphong,
//     trangthai = req.body.trangthai

//   pool
//     .query('insert into phong (tenphong,succhua,dientich, giaphong, tinhtrangphong, trangthai) values ($1,$2,$3,$4,$5,$6)', [tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã insert dữ liệu thành công');
//       }
//     })
// });


// /* API CHO DỊCH VỤ */
// // lấy thông tin toàn bộ dịch vụ
// router.get('/getAllDichVu', function (req, res, next) {
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
//     .query('SELECT * FROM dichvu')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });
// // Xóa dịch vụ
// router.delete('/xoaDichVu/:id', function (req, res, next) {
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

//   const id = parseInt(req.params.id)
//   pool.query('DELETE FROM dichvu WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).send(`User deleted with ID: ${id}`)
//   })


// });
// // THêm dịch vụ mới
// router.get('/themDichVu', function (req, res, next) {
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

// });
// router.post('/themDichVu', function (req, res, next) {
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

//   var tendichvu = req.body.tendichvu,
//     giadichvu = req.body.giadichvu,
//     loaidichvu = req.body.loaidichvu


//   pool
//     .query('insert into dichvu (tendichvu, giadichvu, loaidichvu) values ($1,$2,$3)', [tendichvu, giadichvu, loaidichvu], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã insert dữ liệu thành công');
//       }
//     })
// });


// /* API CHO KHÁCH HÀNG */
// // lấy thông tin toàn bộ khách hàng
// router.get('/getAllKhachHang', function (req, res, next) {
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
//     .query('SELECT * FROM khachhang')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });

// // thêm Khách Thuê
// router.get('/themKhachThue', function (req, res, next) {
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

// });
// router.post('/themKhachThue', function (req, res, next) {
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

//   var hoten = req.body.hoten,
//     noithuongtru = req.body.noithuongtru,
//     noisinh = req.body.noisinh,
//     nguyenquan = req.body.nguyenquan,
//     ngaysinh = req.body.ngaysinh,
//     gioitinh = req.body.gioitinh,
//     sodienthoai = req.body.sodienthoai,
//     cmnd = req.body.cmnd,
//     trangthai = req.body.trangthai,
//     maphong = req.body.maphong


//   pool
//     .query('insert into khachhang (hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai,cmnd, trangthai, maphong) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)', [hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, trangthai, maphong], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã insert dữ liệu thành công');
//       }
//     })
// });



// /* API CHO HỢP ĐỒNG THUÊ */

// // Thêm hợp đồng thuê
// router.get('/themHopDong', function (req, res, next) {
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

// });
// router.post('/themHopDong', function (req, res, next) {
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

//   var ngaythue = req.body.ngaythue,
//     ngayhethan = req.body.ngayhethan,
//     tiencoc = parseInt(req.body.tiencoc),
//     kythanhtoan = parseInt(req.body.kythanhtoan),
//     maphong = req.body.maphong,
//     makhachhang = req.body.makhachhang


//   pool
//     .query('insert into hopdongthue (ngaythue, ngayhethan, tiencoc, kythanhtoan, maphong, makhachhang) values ($1,$2,$3,$4,$5,$6)', [ngaythue, ngayhethan, tiencoc, kythanhtoan, maphong, makhachhang], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã insert dữ liệu thành công');
//       }
//     })
// });
// // lấy thông tin toàn bộ hợp đồng
// router.get('/getAllHopDongThue', function (req, res, next) {
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
//     .query('SELECT * from hopdongthue')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });





// // lấy thông tin khách hàng với mã phòng
// // router.get('/getKhachHang', function (req, res, next) {
// //   // Website you wish to allow to connect
// //   // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// //   res.setHeader('Access-Control-Allow-Origin', '*');

// //   // Request methods you wish to allow
// //   res.setHeader('Access-Control-Allow-Methods', 'POST');

// //   // Request headers you wish to allow
// //   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

// //   // Set to true if you need the website to include cookies in the requests sent
// //   // to the API (e.g. in case you use sessions)
// //   res.setHeader('Access-Control-Allow-Credentials', true);



// //   pool
// //     .query('select makhachhang, hoten from khachhang')
// //     .then(respond => res.send(respond.rows))
// //     .catch(error =>
// //       setImmediate(() => {
// //         throw error
// //       })
// //     )

// // });

// // API cho Tài Sản
// router.get('/themTaiSan', function (req, res, next) {
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

// });
// router.post('/themTaiSan', function (req, res, next) {
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

//   var ten = req.body.ten,
//     serial = req.body.serial,

//     maphong = req.body.maphong,
//     dongia = req.body.dongia


//   pool
//     .query('insert into taisan (ten, serial, maphong, dongia) values ($1,$2,$3,$4)', [ten, serial, maphong, dongia], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã insert dữ liệu thành công');
//       }
//     })
// });
// // lấy thông tin toàn bộ hợp đồng
// router.get('/getAllTaiSan', function (req, res, next) {
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
//     .query('select * from taisan')
//     .then(respond => res.send(respond.rows))
//     .catch(error =>
//       setImmediate(() => {
//         throw error
//       })
//     )

// });


// router.get('/deleteTaiSan/:id', function (req, res, next) {
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

//   const id = parseInt(req.params.id)

//   pool
//     .query('delete from taisan where id = $1', [id], (error, response) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.send('Đã Xóa dữ liệu thành công');
//       }
//     })

// });
// module.exports = router;


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
// cập nhật thông tin phòng
router.put('/capNhatPhong/:id', function (req, res, next) {
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
    var tenphong = req.body.tenphong,
        succhua = req.body.succhua,
        dientich = req.body.dientich,
        giaphong = req.body.giaphong,
        tinhtrangphong = req.body.tinhtrangphong,
        trangthai = req.body.trangthai



    pool
        .query(`update phong set tenphong = $1, succhua = $2, dientich = $3, giaphong = $4, tinhtrangphong = $5, trangthai = $6 where maphong = ${id}`, [tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã insert dữ liệu thành công');
            }
        })
});

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





    pool.query('SELECT maphong FROM phong', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

});

// lấy danh sách phòng trống, tinhtrangphong = false
router.get('/getPhongTrong', function (req, res, next) {
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





    pool.query(`SELECT * FROM phong where tinhtrangphong = 'false' `, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

});

// lấy danh sách phòng đã thuê
router.get('/getPhongThue', function (req, res, next) {
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





    pool.query(`SELECT * FROM phong where tinhtrangphong = 'true' `, (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

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

router.get('/getAllPhongDaThue', function (req, res, next) {
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
        .query(`SELECT * FROM phong where tinhtrangphong = 'true'`)
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


// set true tinhtrangphi cho phòng
router.put('/checkedTinhTrangPhong/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update phong set tinhtrangphong = 'true' where maphong = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
});

router.put('/rejectTinhTrangPhong/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update phong set tinhtrangphong = 'false' where maphong = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
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
        .query('SELECT * FROM khachhang where trangthai = false')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// tính số lượng khách hàng trong 1 phòng
router.get('/countKhachHang/:id', function (req, res, next) {
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
        .query(`SELECT COUNT(maphong)
        FROM khachhang
        where maphong = ${id}`)
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// lấy danh sách khách hàng đã trả phòng
router.get('/getAllKhachHangTraPhong', function (req, res, next) {
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
        .query('SELECT * FROM khachhang where trangthai = true')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});
// get chi tiết khách thuê
router.get('/getKhachThue/:id', function (req, res, next) {
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

    pool.query('SELECT * FROM khachhang WHERE makhachhang = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

});

// xóa Khách Thuê 
router.put('/xoaKhachThue/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update khachhang set trangthai = true where makhachhang = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
});

// xóa khách thuê theo mã phòng
router.put('/xoaKhachThueTheoMaPhong/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update khachhang set trangthai = true where maphong = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
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
        maphong = req.body.maphong

    var trangthai = false
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
// get chi tiết hợp đồng
router.get('/getHopDong/:id', function (req, res, next) {
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

    pool.query('SELECT * FROM hopdongthue WHERE mahopdong = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })

});


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
        tiencoc = req.body.tiencoc,
        kythanhtoan = req.body.kythanhtoan,
        maphong = req.body.maphong,
        makhachhang = req.body.makhachhang
    var tinhtranghopdong = false


    pool
        .query('insert into hopdongthue (ngaythue, ngayhethan, tiencoc, kythanhtoan, maphong, makhachhang, tinhtranghopdong) values ($1,$2,$3,$4,$5,$6,$7)', [ngaythue, ngayhethan, tiencoc, kythanhtoan, maphong, makhachhang, tinhtranghopdong], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã insert dữ liệu thành công');
            }
        })
});
// lấy thông tin hợp đồng đang thuê
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
        .query('select * from khachhang inner join hopdongthue on khachhang.makhachhang = hopdongthue.makhachhang where tinhtranghopdong = false')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// lấy thông tin tất cả hợp đồng gồm cả phòng
router.get('/getAllHopDong', function (req, res, next) {
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
        .query('select * from hopdongthue inner join phong on hopdongthue.maphong = phong.maphong where tinhtranghopdong = false')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});



// lấy thông tin hợp đồng đã thuê
router.get('/getAllHopDongDaThue', function (req, res, next) {
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
        .query('select * from khachhang inner join hopdongthue on khachhang.makhachhang = hopdongthue.makhachhang where tinhtranghopdong = true')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});



// lấy thông tin khách hàng với mã phòng
router.get('/getKhachHangOfPhong', function (req, res, next) {
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
        .query('select khachhang.maphong, khachhang.makhachhang, khachhang.hoten from phong inner join khachhang on phong.maphong = khachhang.makhachhang')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// hủy hợp đồng thuê đang thuê
router.put('/huyHopDong/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update hopdongthue set tinhtranghopdong = true where maphong = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
});

// API cho Hóa Đơn
router.get('/getAllHoaDon', function (req, res, next) {
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
        .query('SELECT * FROM phieuthu')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});


// lấy danh sách hóa đơn đã thanh toán
router.get('/getAllHoaDonDaThanhToan', function (req, res, next) {
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
        .query(`SELECT * FROM phieuthu where tinhtrangphi = 'true'`)
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});
router.get('/themHoaDon', function (req, res, next) {
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
router.post('/themHoaDon', function (req, res, next) {
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

    var tenphieuthu = req.body.tenphieuthu,
        maphong = req.body.maphong,
        thanhtien = req.body.thanhtien,
        tinhtrangphi = req.body.tinhtrangphi,
        thangthanhtoan = req.body.thangthanhtoan,
        ngaylap = req.body.ngaylap,
        phiphatsinh = req.body.phiphatsinh

    pool
        .query('insert into phieuthu (tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi) values ($1,$2,$3,$4,$5,$6,$7)', [tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã insert dữ liệu thành công');
            }
        })
});

// duyệt hóa đơn

router.put('/duyetHoaDon/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update phieuthu set tinhtrangphi = 'Đã thanh toán' where maphieuthu = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
});

router.put('/huyDuyetHoaDon/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update phieuthu set tinhtrangphi = 'Chưa Đóng' where maphieuthu = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
});



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

    var trangthai = false


    pool
        .query('insert into taisan (ten, serial, maphong, dongia, trangthai) values ($1,$2,$3,$4, $5)', [ten, serial, maphong, dongia, trangthai], (error, response) => {
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
        .query('select * from taisan where trangthai = false')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// lấy danh sách tài sản cần sửa chữa
router.get('/getAllTaiSanSuaChua', function (req, res, next) {
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
        .query('select * from taisan where trangthai = true')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

// set trạng thái tài sản
router.put('/fixTaiSan/:id', function (req, res, next) {
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

    var id = parseInt(req.params.id)

    pool
        .query(`update taisan set trangthai = true where id = ${id}`, (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã update dữ liệu thành công');
            }
        })
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

// user name 
//password
// select username,passowrd where 


// Phiếu Chi

// lấy danh sách phiếu chi
router.get('/getAllPhieuChi', function (req, res, next) {
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
        .query('select * from phieuchi inner join khachhang on phieuchi.makhachhang = khachhang.makhachhang')
        .then(respond => res.send(respond.rows))
        .catch(error =>
            setImmediate(() => {
                throw error
            })
        )

});

//thêm phiếu chi
router.post('/themPhieuChi', function (req, res, next) {
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

    var maphong = parseInt(req.body.maphong),
        makhachhang = parseInt(req.body.makhachhang),
        tienchi = req.body.tienchi,
        ngaylap = req.body.ngaylap

    pool
        .query('insert into phieuchi (maphong, makhachhang, tienchi, ngaylap) values ($1,$2,$3,$4)', [maphong, makhachhang, tienchi, ngaylap], (error, response) => {
            if (error) {
                console.log(error);
            } else {
                res.send('Đã insert dữ liệu thành công');
            }
        })
});


module.exports = router;
