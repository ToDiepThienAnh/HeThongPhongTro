import React, { Component } from 'react'
import '../../App.css'

export default class FormDangNhap extends Component {
    render() {
        return (
            <div className='bgLogin'>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', position: 'fixed', width: '100%', height: "100%" }}>
                    <div style={{ height: 300, transform: " translateY(150px)" }} className='container bg-light w-25 px-0'>
                        <h3 className='text-center bg-light text-secondary py-3'>Đăng Nhập</h3>
                        <div className='form-group mt-4 px-2'>
                            <input className='form-control' placeholder='Nhập địa chỉ email' type='text'></input>
                        </div>
                        <div className='form-group px-2'>
                            <input className='form-control' placeholder='Nhập mật khẩu' type="password"></input>
                        </div>
                        <div className='form-group text-center'>
                            <button className='btn btn-success'>Đăng Nhập</button>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <a href="">Quên mật khẩu</a>
                            <a href="">Đăng kí tài khoản mới</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
