import React, { Component } from 'react'


export default class FormHopDong extends Component {
    render() {
        return (
            <div>
                <div className='row text-secondary'>
                    <div className='col-6'>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Số Hợp Đồng</p></div>
                            <div className='col-8 pl-0'>
                            <input type="text" className="form-control"/>
                            </div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Thời Hạn HĐ</p></div>
                            <div className='col-8 pl-0'>
                            <div className="input-group mb-3">
                                    <input type="text" className="form-control"/>
                                    <span className="input-group-text">Tháng</span>
                                </div>
                            </div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Kỳ Thanh Toán</p></div>
                            <div className='col-8 pl-0'>
                            <div className="input-group mb-3">
                                    <input type="text" className="form-control"/>
                                    <span className="input-group-text">Tháng</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-6'>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Ngày Tạo HĐ</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Ngày Hết Hạn HĐ</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
