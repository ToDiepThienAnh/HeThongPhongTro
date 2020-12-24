import React, { Component } from 'react'

export default class FormDoiMatKhau extends Component {
    render() {
        return (
            <div className='container text-secondary'>
                <h1>Thay Đổi Mật Khẩu</h1>

                
                    <div className='form-group row px-2'>
                        <div className='col-3'>
                            <p>Mật khẩu hiện tại *</p>
                        </div>
                        <div className='col-9 pl-0'>
                            <input className='form-control' type="password"></input>
                        </div>
                    </div>
                    <div className='form-group row px-2'>
                        <div className='col-3'>
                            <p>Mật khẩu mới *</p>
                        </div>
                        <div className='col-9 pl-0'>
                            <input className='form-control' type="password"></input>
                        </div>
                    </div>
                    <div className='form-group row px-2'>
                        <div className='col-3'>
                            <p>Nhập lại mật khẩu mới *</p>
                        </div>
                        <div className='col-9 pl-0'>
                            <input className='form-control' type="password"></input>
                        </div>
                    </div>
                    <p className='text-danger'>(*): Thông tin bắt buộc</p>
                </div>
            
        )
    }
}
