import React, { Component } from 'react'

export default class ServicesList extends Component {
    render() {
        return (
            <div>
                <div style={{ borderBottom: '2px solid gray' }} className='d-flex justify-content-between py-2'>
                    <h2 className='text-secondary py-2'>
                        Danh sách dịch vụ</h2>
                    <div className='py-2'>
                        <button className='btn btn-success mr-2'>
                            <i class="fa fa-plus"></i><span className='ml-2'>Thêm dịch vụ</span></button>
                        <button className='btn btn-danger mr-2'>
                            <i class="fa fa-times"></i><span className='ml-2'>Xóa</span></button>
                    </div>
                </div>
                <p className='text-secondary'>Lưu ý:</p>
                <p>Các dịch vụ phải được gán cho từng khách thuê phòng để khi tính tiền sẽ có tiền dịch vụ đó.
Để cấu hình đơn giá điện nước tính theo bậc thang bạn vẫn phải tạo 2 dịch vụ là điện, nước; sau đó vào menu "Thiết lập" rồi Tab "Đơn giá điện nước bậc thang" để thiết lập đơn giá.</p>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Tên dịch vụ</th>
                            <th>Loại dịch vụ</th>
                            <th>Đơn giá (VNĐ)</th>
                            <th>Đang sử dụng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='d-flex justify-content-center' style={{ gap: '5px' }}>
                                    <button className='btn btn-success'>
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button className='btn btn-danger'>
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                            <td>Điện</td>
                            <td>Nước</td>
                            <td>3000</td>
                            <td>
                                <div className='text-secondary text-center'>
                                    <i style={{ fontSize:'25px'}} class="fa fa-check-square"></i>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <div className='d-flex justify-content-center' style={{ gap: '5px' }}>
                                    <button className='btn btn-success'>
                                        <i class="fa fa-edit"></i>
                                    </button>
                                    <button className='btn btn-danger'>
                                        <i class="fa fa-times"></i>
                                    </button>
                                </div>
                            </td>
                            <td>Điện</td>
                            <td>Nước</td>
                            <td>3000</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
