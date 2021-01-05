import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { SET_DANHSACH_KHACHHANG } from '../../Redux/type/type';
import { Link } from 'react-router-dom';
import moment from 'moment'



class DanhSachKhachThue extends Component {

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
            render: (makhachhang) => (
                <div>

                    <Link to={`KhachThue/chiTietKhachThue/${makhachhang}`}>
                        <Button>Xem chi tiết</Button> &nbsp;
                    </Link>
                    <Button onClick={() => this.deleteKhachThue(makhachhang)} danger>Xóa</Button> &nbsp;
                    <Link to="KhachThue/editKhachThue">
                        <Button type='primary'>Sửa</Button></Link>
                </div>
            )
        },

    ];
    layDanhSachKhachHang = () => {
        axios.get('http://localhost:4000/getAllKhachHang').then(res => this.props.dispatch({
            type: SET_DANHSACH_KHACHHANG,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    deleteKhachThue = async (makhachhang) => {
        // alert(makhachhang)
        const deleteKhachThue = await axios({
            method: 'PUT',
            url: `http://localhost:4000/xoaKhachThue/${makhachhang}`
        })
        if (deleteKhachThue) {
            alert('Đã Xóa Khách thuê thành công')
        }
    }

    componentDidMount() {
        this.layDanhSachKhachHang();
    }
    render() {
        console.log('mảng Khách hàng', this.props.mangKhachHang);

        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Khách Thuê</h3>
                <div className='mb-4'>
                    <Link to="/KhachThue/KhachThueTraPhong">
                        <button className='btn btn-primary'>Danh sách thuê trả phòng </button>
                    </Link>
                </div>
                <div className='text-right mb-4'>
                    <Link to="/KhachThue/themKhachThue">
                        <button className='btn btn-success mr-2'>Thêm Khách </button>
                    </Link>
                </div>

                <Table columns={this.columns} dataSource={this.props.mangKhachHang} />
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