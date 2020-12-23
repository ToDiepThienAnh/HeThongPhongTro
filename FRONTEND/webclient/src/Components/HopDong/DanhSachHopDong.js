import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button, Switch } from 'antd';
import { SET_DANHSACH_HOPDONG } from '../../Redux/type/type';
import { Link, Redirect, Route } from 'react-router-dom'
import FormKhachThue from '../KhachThue/FormKhachThue';

const columns = [
    {
        title: 'Mã hợp đồng',
        dataIndex: 'mahopdong',
        key: 'mahopdong',
    },
    {
        title: 'Ngày Thuê',
        dataIndex: 'ngaythue',
        key: 'ngaythue',
    },
    {
        title: 'Ngày Hết Hạn',
        dataIndex: 'ngayhethan',
        key: 'ngayhethan',
    },
    {
        title: 'Kỳ thanh toán',
        dataIndex: 'kythanhtoan',
        key: 'kythanhtoan',
        render: (kythanhtoan) => <div>{kythanhtoan} tháng</div>
    },
    {
        title: 'Khách Hàng',
        dataIndex: 'makhachhang',
        key: 'khachhang',

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

                <Button danger>Xóa</Button> &nbsp;
                <Button type='primary'>Sửa</Button>
            </div>
        )
    },

];

class DanhSachHopDong extends Component {


    layDanhSachHopDong = () => {
        axios.get('http://localhost:4000/getAllHopDongThue').then(res => this.props.dispatch({
            type: SET_DANHSACH_HOPDONG,
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachHopDong();
    }

    // renderDanhSachHopDong = () => {
    //     if (this.props.mangHopDong !== null) {
    //         <Table columns={columns} dataSource={this.props.mangHopDong} />
    //     }
    // }

    render() {
        console.log("mảng hợp đồng", this.props.mangHopDong);
        return (
            <div>
                <div>
                    <h3 className='text-secondary'>Danh Sách Hợp Đồng Thuê</h3>
                    <div className='text-right mb-4'>

                        <Link to="'/Phong/themHopDong'" className='btn btn-success'>Tạo Hợp Đồng</Link>
                    </div>

                    <Table columns={columns} dataSource={this.props.mangHopDong} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangHopDong: state.HopDongReducer.mangHopDong
    }
}

export default connect(mapStateToProps)(DanhSachHopDong)