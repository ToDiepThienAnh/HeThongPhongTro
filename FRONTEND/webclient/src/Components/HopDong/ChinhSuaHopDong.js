import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ChinhSuaHopDong extends Component {
    render() {
        return (
            <div>
                <h3 className='text-secondary py-2'>Chỉnh Sửa thông tin Hợp Đồng </h3>
                <div className='text-right mb-4 mr-4'>
                    <Link to="/HopDong">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button></Link>
                </div>
                <form>
                    <div className='row text-secondary'>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số Hợp Đồng</p></div>
                                <div className='col-8 pl-0'>
                                    <input type="text" className="form-control" />
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thời Hạn HĐ</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">Tháng</span>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Kỳ Thanh Toán</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" />
                                        <span className="input-group-text">Tháng</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày Tạo HĐ</p></div>
                                <div className='col-8 pl-0'><input type="date" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày Hết Hạn HĐ</p></div>
                                <div className='col-8 pl-0'><input type="date" className="form-control" /></div>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
