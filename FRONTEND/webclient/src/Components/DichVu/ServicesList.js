import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SET_DANHSACH_DICHVU } from '../../Redux/type/type';
import axios from 'axios'




class ServicesList extends Component {

    layDanhSachDichVu = () => {
        axios.get('http://localhost:4000/getALlDichVu').then(res => this.props.dispatch({
            type: SET_DANHSACH_DICHVU,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachDichVu()
    }


    render() {
        console.log(this.props.mangDichVu, "Mảng dịch vụ");
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
                <table className='table table-bordered table-dark'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Tên dịch vụ</th>
                            <th>Loại dịch vụ</th>
                            <th>Đơn giá (VNĐ)</th>
                            {/* <th>Đang sử dụng</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangDichVu.map((dichvu, index) => {
                            return <tr key={index}>

                                <td></td>
                                <td>{dichvu.tendichvu}</td>
                                <td>{dichvu.loaidichvu}</td>
                                <td>{dichvu.giadichvu}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangDichVu: state.DichVuReducer.mangDichVu
    }
}


export default connect(mapStateToProps)(ServicesList)