import React, { Component } from 'react'

export default class DanhSachHoaDon extends Component {
    render() {
        return (
            <div className='container bg-light'>
                <h1>Danh Sách Hóa Đơn</h1>
                <div>
                    <button className='btn btn-success float-right'>Thêm</button>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Phòng</th>
                            <th>Ngày Lập</th>
                            <th>Tháng thanh toán</th>
                            <th>Năm thanh toán</th>
                            <th>Phí Phát Sinh</th>
                            <th>Thành tiền</th>
                            <th>Tình trạng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>13/12/2020</td>
                            <td>12</td>
                            <td>2020</td>
                            <td>0</td>
                            <td>0</td>
                            <td>Chưa thua phí</td>
                            <td>
                                <button className='btn btn-secondary'>Xem</button>
                                <button className='btn btn-danger'>Xóa</button>
                                <button className='btn btn-info'>Sửa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
