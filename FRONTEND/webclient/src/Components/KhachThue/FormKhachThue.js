import React, { Component } from 'react'

export default class FormKhachThue extends Component {
    render() {
        return (
            <div>
                <div className="row text-secondary">
                    <div className="col-6">
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Họ và tên *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Giới tính *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" />
                            </div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Số điện thoại *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>

                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Ngày sinh (dd/MM/yyyy) *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Thuê phòng số</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>CMND/ CCCD *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Nguyên Quán *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Nơi Sinh *</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Tiền Phòng</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div>
                        <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Email </p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>
                            
                        </div>
                    </div>

                </div>
                <div className="form-group text-secondary row px-2">
                    <div className='col-2 pr-0'><p>Địa chỉ thường trú *</p></div>
                    <div className='col-10 pl-0'><input type="text" className="form-control" /></div>

                </div>
            </div>

        )
    }
}
