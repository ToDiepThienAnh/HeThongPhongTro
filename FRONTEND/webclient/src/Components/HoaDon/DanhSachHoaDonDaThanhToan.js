import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment'
class DanhSachHoaDonDaThanhToan extends Component {

    layDanhSachHoaDon = () => {
        Axios.get('http://localhost:4000/getAllHoaDonDaThanhToan').then(res => this.props.dispatch({
            type: 'SET_DANHSACH_HOADON_THANHTOAN',
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachHoaDon();
    }

    render() {
        return (
            <div className='bg-light'>
                <h1>Danh Sách Hóa Đơn Đã thanh toán</h1>
                <div className='mb-3'>

                    <Link to={'/HoaDon'}>
                        <button className='btn btn-warning text-white float-right'>Quay về</button>
                    </Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Phòng</th>
                            <th>Ngày Lập</th>
                            <th>Tháng thanh toán</th>
                            <th>Phí Phát Sinh</th>
                            <th>Thành tiền</th>
                            <th>Tình trạng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangHoaDonDaThanhToan?.map((hoadon, index) => {
                            return <tr key={index}>
                                <td>{hoadon.maphong}</td>
                                <td>{(moment(hoadon.ngaylap).format("DD/MM/YYYY"))}</td>
                                <td>{hoadon.thangthanhtoan}</td>
                                <td>{hoadon.phiphatsinh}</td>
                                <td>{hoadon.thanhtien}</td>
                                <td>{hoadon.tinhtrangphi === 'true' ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                                <td>

                                    <button className='btn btn-danger'>
                                        <i className="fa fa-times"></i>
                                    </button>
                                </td>
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
        mangHoaDonDaThanhToan: state.HoaDonReducer.mangHoaDonDaThanhToan
    }
}

export default connect(mapStateToProps)(DanhSachHoaDonDaThanhToan)
