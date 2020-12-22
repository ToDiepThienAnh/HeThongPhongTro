import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (

            <div className='text-white'>
                <h3 className='text-center text-white'>Quản lí Phòng Trọ</h3>
                <p className='text-center'>Simple House</p>
                <span className='text-center'>Xin chào Thiên Anh</span>
                <ul className='menu-ul px-0 mt-4'>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-home' ></i>
                        <Link to='/Phong' className='text-white ml-4 '>Phòng</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-cubes' ></i>
                        <Link to='/DichVu' className='text-white ml-4 '>Dịch vụ</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>

                        <i className='text-size fa fa-bolt'  ></i>
                        <Link className='text-white ml-4 '>Chỉ số điện</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-shower'></i>
                        <Link className='text-white ml-4 '>Chỉ số nước</Link>
                    </li>
                    {/* <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-calculator"></i>
                        <Link className='text-white ml-4 '>Tính tiền</Link>
                    </li> */}
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-money-bill' ></i>
                        <Link to='/HoaDon' className='text-white ml-4'>Hóa đơn</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-user' ></i>
                        <Link to='/KhachThue' className='ml-4 text-white'>Khách Thuê</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-file-contract'></i>
                        <Link to='/HopDong' className='ml-4 text-white'>Hợp Đồng</Link>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size fa fa-user-tie'></i>
                        <Link to="/NhanVien" className='ml-4 text-white'>Nhân Viên</Link>
                    </li>
                </ul>
            </div>

        )
    }
}
