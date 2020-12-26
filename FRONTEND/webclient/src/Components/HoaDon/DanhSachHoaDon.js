import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { SET_DANHSACH_HOADON } from '../../Redux/type/type';
import { Link } from 'react-router-dom';


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
        return (
            <div className='container bg-light'>
                <h1>Danh Sách Hóa Đơn</h1>
                <div>
                    <Link to={'/HoaDon/themHoaDon'}>
                        <button className='btn btn-success float-right'>Thêm</button>
                    </Link>
                </div>
                {/* <table className='table'>
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
                </table> */}
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
