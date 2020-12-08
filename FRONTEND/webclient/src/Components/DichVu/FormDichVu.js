import React, { Component } from 'react'

export default class FormDichVu extends Component {
    render() {
        return (
            <div>
                <table className='table table-bordered table-primary'>
                    <thead className='thead-dark'>
                        <tr>
                        <th>Chọn</th>
                        <th>Dịch vụ sử dụng</th>
                        <th>Loại Dịch Vụ</th>
                        <th>Đơn giá (VNĐ)</th>
                        </tr>
                        
                    </thead>
                    <tbody className='tbody-primary'>
                        <tr>
                            <td></td>
                            <td>Điện </td>
                            <td>Điện</td>
                            <td>
                            <input type="text" className="text-right" placeholder={3000} />
                            </td>
                            
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
