import React, { Component } from 'react'

export default class FormHoaDon extends Component {
    render() {
        return (
            <div className='container text-secondary'>
                <div className='d-flex justify-content-between'>
                <h1 className=''>Thêm Hóa Đơn</h1>
                <div className=''>
                    <button className='btn btn-warning mr-2 text-white'><i class="fa fa-reply"></i><span className='ml-2'>Quay về</span></button>
                    <button className='btn btn-success'><i class="fa fa-check"></i><span className='ml-2'>Lưu</span></button>
                </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phòng *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Ngày lập hóa đơn*</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tháng thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Ngày lập *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Năm thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phí phát sinh *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tổng tiền *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Trạng thái phí *</p>
                            </div>
                            <div className='col-8 pl-0'>
                            <input className='' type="checkbox" name="" value=""></input>
                                
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}
