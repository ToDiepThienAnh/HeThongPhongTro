import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios';

import { Table, Button } from 'antd';
import { SET_DANHSACH_NHANVIEN } from '../../Redux/type/type';
import { Link } from 'react-router-dom';


const columns = [
    {
        title: 'Họ Tên',
        dataIndex: 'hoten',
        key: 'hoten',
    },
    {
        title: 'Tên Tài Khoản',
        dataIndex: 'tentaikhoan',
        key: 'tentaikhoan',
    },
    {
        title: 'Địa Chỉ',
        dataIndex: 'diachi',
        key: 'diachi',
    },
    {
        title: 'CMND/CCCD',
        dataIndex: 'cmnd',
        key: 'cmnd',

    },
    {
        title: 'Số Điện Thoại',
        dataIndex: 'sodienthoai',
        key: 'sodienthoai',

    },

    {
        title: '',
        dataIndex: 'options',
        key: 'options',
        render: () => (
            <div>

                <Button danger>Xóa</Button> &nbsp;
                <Link to="NhanVien/editNhanVien">
                    <Button type='primary'>Sửa</Button></Link>
            </div>
        )
    },

];

class DanhSachTaiKhoan extends Component {
    layDanhSachNhanVien = () => {
        axios.get('http://localhost:4000/getAllNhanVien').then(res => this.props.dispatch({
            type: SET_DANHSACH_NHANVIEN,
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachNhanVien();
    }
    render() {
        // console.log("mảng Nhân viên", this.props.mangNhanVien);
        return (
            <div>
                <div>
                    <h3 className='text-secondary'>Danh Sách Nhân Viên</h3>
                    <div className='text-right mb-4'>
                        <Link to="/NhanVien/themNhanVien">
                            <button className='btn btn-success'>Thêm Nhân Viên</button>
                        </Link>
                    </div>

                    <Table columns={columns} dataSource={this.props.mangNhanVien} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangNhanVien: state.NhanVienReducer.mangNhanVien
    }
}
export default connect(mapStateToProps)(DanhSachTaiKhoan)