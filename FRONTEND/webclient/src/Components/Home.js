// Libraries
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

// Components
import FormDichVu from './DichVu/FormDichVu'
import FormKhachThue from './KhachThue/FormKhachThue'
import Menu from './Menu'
import DanhSachPhong from './Phong/DanhSachPhong'
import ServicesList from './DichVu/ServicesList'
import FormHopDong from './HopDong/FormHopDong'
import DanhSachHoaDon from './HoaDon/DanhSachHoaDon'
import DanhSachTaiSan from './TaiSan/DanhSachTaiSan'
import DanhSachKhachThue from './KhachThue/DanhSachKhachThue'
import DanhSachHopDong from './HopDong/DanhSachHopDong'
import DanhSachTaiKhoan from './NhanVien/DanhSachTaiKhoan'
import FormPhong from './Phong/FormPhong'
import FormDangKy from './NhanVien/FormDangKy'
import ChiTietHopDong from './HopDong/ChiTietHopDong'
import ChiTietPhong from './Phong/ChiTietPhong'
import ChiTietKhachThue from './KhachThue/ChiTietKhachThue'
import ChinhSuaHopDong from './HopDong/ChinhSuaHopDong'
import ChiTietHoaDon from './HoaDon/ChiTietHoaDon'
import ChinhSuaPhong from './Phong/ChinhSuaPhong'
import ChinhSuaKhachThue from './KhachThue/ChinhSuaKhachThue'
import ThemTaiSan from './TaiSan/ThemTaiSan'
import FormHoaDon from './HoaDon/FormHoaDon'
import ThemNhanVien from './NhanVien/ThemNhanVien'
import ChinhSuaNhanVien from './NhanVien/ChinhSuaNhanVien'
import DanhSachHopDongDaThue from './HopDong/DanhSachHopDongDaThue'
import DanhSachHoaDonDaThanhToan from './HoaDon/DanhSachHoaDonDaThanhToan'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div style={{ height: '100vh' }} className='col-2 bgMenu px-0'>
                        <Menu></Menu>
                    </div>

                    <div style={{ overflow: 'auto', height: '100vh' }} className='col-10 pr-0'>

                        <div style={{ height: 50, backgroundColor: '#EDEDED' }}></div>
                        <Switch>
                            <Route path='/DichVu' exact component={ServicesList} />
                            <Route path='/HoaDon' exact component={DanhSachHoaDon} />
                            <Route path='/HopDong' exact component={DanhSachHopDong} />
                            <Route path='/Phong' exact component={DanhSachPhong} />
                            <Route path='/KhachThue' exact component={DanhSachKhachThue} />
                            <Route path='/NhanVien' exact component={DanhSachTaiKhoan} />
                            <Route path='/TaiSan' exact component={DanhSachTaiSan} />
                            {/* Form Nhập thông tin */}
                            <Route path='/HopDong/themHopDong' exact component={FormHopDong} />
                            <Route path='/Phong/themPhong' exact component={FormPhong} />
                            <Route path='/KhachThue/themKhachThue/:id?' exact component={FormKhachThue} />
                            <Route path='/NhanVien/DangKy' exact component={FormDangKy} />
                            <Route path='/HoaDon/themHoaDon' exact component={FormHoaDon} />
                            <Route path='/DichVu/themDichVu' exact component={FormDichVu} />
                            <Route path='/TaiSan/themTaiSan' exact component={ThemTaiSan} />
                            <Route path='/NhanVien/themNhanVien' exact component={ThemNhanVien} />
                            <Route path='/TaiSan/themTaiSan' exact component={ThemTaiSan} />
                            <Route path='/ChiTiet/:id' exact component={FormPhong} />
                            {/* ChiTiet  */}
                            <Route path='/HopDong/chiTietHopDong' exact component={ChiTietHopDong} />
                            <Route path='/Phong/chiTietPhong/:id' exact component={ChiTietPhong} />
                            <Route path='/KhachThue/chiTietKhachThue' exact component={ChiTietKhachThue} />
                            <Route path='/HoaDon/chiTietHoaDon' exact component={ChiTietHoaDon} />
                            {/* Sửa thông tin */}
                            <Route path='/HopDong/editHopDong' exact component={ChinhSuaHopDong} />
                            <Route path='/Phong/editPhong/:id' exact component={ChinhSuaPhong} />
                            <Route path='/KhachThue/editKhachThue' exact component={ChinhSuaKhachThue} />
                            <Route path='/NhanVien/editNhanVien' exact component={ChinhSuaNhanVien} />

                            {/* Danh Sách Hợp Đồng Đã Thuê */}
                            <Route path='/HopDong/HopDongDaThue' exact component={DanhSachHopDongDaThue} />
                            {/* Danh sách hóa đơn đã thanh toán */}
                            <Route path='/HoaDon/HoaDonDaThanhToan' exact component={DanhSachHoaDonDaThanhToan} />
                            <Redirect to='/Phong' />

                        </Switch>
                        {/* <ServicesList></ServicesList> */}
                        {/* <DanhSachPhong></DanhSachPhong> */}
                        {/* <FormKhachThue></FormKhachThue> */}
                        {/* <FormHopDong></FormHopDong> */}
                    </div>
                </div>
            </div>
        )
    }
}
