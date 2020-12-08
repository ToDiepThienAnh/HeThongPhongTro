import React, { Component } from 'react'


export default class Menu extends Component {
    render() {
        return (
            <div className='text-white'>
                <h3 className='text-center'>Quản lí Phòng Trọ</h3>
                <p className='text-center'>Simple House</p>
                <span className='text-center'>Xin chào Thiên Anh</span>
                <ul className='menu-ul px-0 mt-4'>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-home"></i>
                        <a className='ml-4 '>Phòng</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-cubes"></i>
                        <a className='ml-4 '>Dịch vụ</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        
                        <i className='text-size' class="fa fa-bolt"></i>
                        <a className='ml-4 '>Chỉ số điện</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-shower"></i>
                        <a className='ml-4 '>Chỉ số nước</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-calculator"></i>
                        <a className='ml-4 '>Tính tiền</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-money-bill"></i>
                        <a className='ml-4'>Hóa đơn</a>
                    </li>
                    <li className='py-2 pl-2 li-hover'>
                        <i className='text-size' class="fa fa-money-bill"></i>
                        <a className='ml-4'>Khách Thuê</a>
                    </li>
                </ul>
            </div>
        )
    }
}
