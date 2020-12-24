import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ChinhSuaNhanVien extends Component {
    render() {
        return (
            <div>
                <h3 className='text-secondary py-2'>Chỉnh Sửa thông tin Nhân Viên </h3>
                <div className='text-right mb-4 mr-4'>
                    <Link to="/NhanVien">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button></Link>
                </div>
                <form>
                    <div className='row text-secondary'>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Họ Tên</p></div>
                                <div className='col-8 pl-0'>
                                    <input type="text" className="form-control" />
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Tài Khoản</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" />

                                    </div>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Mật Khẩu</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input type="password" className="form-control" />

                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Địa chỉ</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số Điện thoại</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>CMND/CCCD</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
