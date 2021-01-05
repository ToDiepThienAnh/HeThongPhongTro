import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';
import { Table, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment'


class KhachThueTraPhong extends Component {
    columns = [
        {
            title: 'Họ Tên',
            dataIndex: 'hoten',
            key: 'hoten',
        },
        {
            title: 'Ngày Sinh',
            dataIndex: 'ngaysinh',
            key: 'ngaysinh',
            render: (ngaysinh) => (
                <div>{moment(ngaysinh).format('DD/MM/YYYY')}</div>
            )
        },
        {
            title: 'Giới tính',
            dataIndex: 'gioitinh',
            key: 'gioitinh',
        },
        {
            title: 'CMND/CCCD',
            dataIndex: 'cmnd',
            key: 'cmnd',

        },
        {
            title: 'Phòng',
            dataIndex: 'maphong',
            key: 'maphong',

        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: () => (
                <div>

                    <Link to="KhachThue/chiTietKhachThue">
                        <Button>Xem chi tiết</Button> &nbsp;
                    </Link>
                    {/* <Button danger>Xóa</Button> &nbsp; */}

                </div>
            )
        }

    ];
    layDanhSachKhachHang = () => {
        axios.get('http://localhost:4000/getAllKhachHangTraPhong').then(res => this.props.dispatch({
            type: 'SET_KHACHHANG_TRAPHONG',
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachKhachHang();
    }
    render() {
        console.log('mảng Khách hàng trả phonf', this.props.mangKhachHangTraPhong);

        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Khách Trả Phòng</h3>
                <div className='text-right mb-4'>
                    <Link to="/KhachThue">
                        <button className='btn btn-warning text-white'>Quay về </button>
                    </Link>
                </div>

                <Table columns={this.columns} dataSource={this.props.mangKhachHangTraPhong} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangKhachHangTraPhong: state.KhachHangReducer.mangKhachHangTraPhong
    }
}

export default connect(mapStateToProps)(KhachThueTraPhong)
