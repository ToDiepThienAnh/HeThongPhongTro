import React, { Component } from 'react'

export default class FormDangKy extends Component {
    render() {
        return (
            <div className='bgLogin'>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: "100%" }}>
                    <div style={{ height: 500, transform: " translateY(50px)", width: 500 }} className='container bg-light px-0'>
                        <h3 className='text-center bg-light text-secondary py-3'>Đăng Ký</h3>
                        <div className='form-group mt-4 px-2'>
                            <input className='form-control' placeholder='Nhập Họ tên' type='text'></input>
                        </div>
                        <div className='form-group px-2'>
                            <input className='form-control' placeholder='CMND' type="text"></input>
                        </div>
                        <div className='form-group px-2'>
                            <input className='form-control' placeholder='email' type="text"></input>
                        </div>
                        <div className='form-group px-2'>
                            <input className='form-control' placeholder='số Điện Thoại' type="text"></input>
                        </div>
                        <div className='form-group px-2'>
                            <input className='form-control' placeholder='Địa chỉ' type="text"></input>
                        </div>
                        <div className='form-group px-2 py-2 d-flex justify-content-around'>
                            <a href="">Quay về trang đăng nhập</a>
                            <button className='btn btn-primary'>Đồng ý</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
