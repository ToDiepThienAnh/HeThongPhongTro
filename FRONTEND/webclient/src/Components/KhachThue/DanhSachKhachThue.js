import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { SET_DANHSACH_KHACHHANG } from '../../Redux/type/type';

const columns = [
    {
        title: 'Họ Tên',
        dataIndex: 'hoten',
        key: 'hoten',
    },
    {
        title: 'Ngày Sinh',
        dataIndex: 'ngaysinh',
        key: 'ngaysinh',
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
                <Button type='primary'>Xem chi tiết</Button> &nbsp;
                <Button danger>Xóa</Button> &nbsp;
                <Button>Sửa</Button>
            </div>
        )
    },

];

class DanhSachKhachThue extends Component {
    layDanhSachKhachHang = () => {
        axios.get('http://localhost:4000/getAllKhachHang').then(res => this.props.dispatch({
            type: SET_DANHSACH_KHACHHANG,
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachKhachHang();
    }
    render() {
        console.log('mảng Khách hàng', this.props.mangKhachHang);

        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Khách Thuê</h3>
                <div className='text-right mb-4'>
                    <button className='btn btn-success mr-2'>Thêm Khách </button>
                </div>

                <Table columns={columns} dataSource={this.props.mangKhachHang} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangKhachHang: state.KhachHangReducer.mangKhachHang
    }
}

export default connect(mapStateToProps)(DanhSachKhachThue)