import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { SET_DANHSACH_HOADON } from '../../Redux/type/type';
import { Link } from 'react-router-dom';
import moment from 'moment'

const columns = [
    {
        title: 'Số phòng',
        dataIndex: 'maphong',
        key: 'maphong',
    },
    {
        title: 'Diện tích',
        dataIndex: 'dientich',
        key: 'dientich',
    },
    {
        title: 'Sức chứa',
        dataIndex: 'succhua',
        key: 'succhua',
    },
    {
        title: 'Giá phòng',
        dataIndex: 'giaphong',
        key: 'giaphong',
        render: (giaPhong) => <div>{giaPhong} VNĐ</div>
    },
    {
        title: '',
        dataIndex: 'options',
        key: 'options',
        render: () => (
            <div>
                <Button type='primary'>Xem chi tiết</Button> &nbsp;
                <Button danger>Xóa</Button> &nbsp;
                <Button>Sửa</Button>
            </div>
        )
    },

];

class DanhSachHoaDon extends Component {

    layDanhSachHoaDon = () => {
        axios.get('http://localhost:4000/getAllHoaDon').then(res => this.props.dispatch({
            type: SET_DANHSACH_HOADON,
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachHoaDon();
    }

    render() {
        console.log("mang hoa don", this.props.mangHoaDon);
        return (
            <div className='bg-light'>
                <h1>Danh Sách Hóa Đơn Chưa thanh toán</h1>
                <div className='mb-3 d-flex justify-content-between'>
                    <Link to='/HoaDon/HoaDonDaThanhToan'>
                        <button className='btn btn-primary '>Danh sách hóa đơn đã thanh toán</button>
                    </Link>
                    <Link to={'/HoaDon/themHoaDon'}>
                        <button className='btn btn-success '>Thêm</button>
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
                        {this.props.mangHoaDon.map((hoadon, index) => {
                            return <tr key={index}>
                                <td>{hoadon.maphong}</td>
                                <td>{(moment(hoadon.ngaylap).format("DD/MM/YYYY"))}</td>
                                <td>{hoadon.thangthanhtoan}</td>
                                <td>{hoadon.phiphatsinh} VNĐ</td>
                                <td>{hoadon.thanhtien} VNĐ</td>
                                <td>{hoadon.tinhtrangphi === 'true' ? 'Đã thanh toán' : 'Chưa thanh toán'}</td>
                                <td>

                                    <button className='btn btn-info'>
                                        <i className="fa fa-check"></i>
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
        mangHoaDon: state.HoaDonReducer.mangHoaDon
    }
}

export default connect(mapStateToProps)(DanhSachHoaDon)
