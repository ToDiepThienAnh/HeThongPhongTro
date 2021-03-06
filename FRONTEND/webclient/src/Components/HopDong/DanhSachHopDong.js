import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button, Switch } from 'antd';
import { SET_DANHSACH_HOPDONG } from '../../Redux/type/type';
import { Link, Redirect, Route } from 'react-router-dom'
import FormKhachThue from '../KhachThue/FormKhachThue';
import moment from 'moment'


class DanhSachHopDong extends Component {


    layDanhSachHopDong = () => {
        axios.get('http://localhost:4000/getAllHopDongThue').then(res => this.props.dispatch({
            type: SET_DANHSACH_HOPDONG,
            data: res.data
        })).catch(err => { console.log(err); })
    }



    columns = [
        {
            title: 'Mã hợp đồng',
            dataIndex: 'mahopdong',
            key: 'mahopdong',
        },
        {
            title: 'Ngày Thuê',
            dataIndex: 'ngaythue',
            key: 'ngaythue',
            render: (ngaythue) => <div>{moment(ngaythue).format("DD/MM/YYYY")}</div>
        },
        {
            title: 'Ngày Hết Hạn',
            dataIndex: 'ngayhethan',
            key: 'ngayhethan',
            render: (ngayhethan) => <div>{moment(ngayhethan).format("DD/MM/YYYY")}</div>
        },
        {
            title: 'Kỳ thanh toán',
            dataIndex: 'kythanhtoan',
            key: 'kythanhtoan',
            render: (kythanhtoan) => <div>{kythanhtoan} tháng</div>
        },
        {
            title: 'Khách Hàng',
            dataIndex: 'hoten',
            key: 'hoten',

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
            render: (maPhong) => (
                <div>

                    <Button onClick={() => { this.deleteHopDongThue(maPhong) }} danger>Xóa</Button> &nbsp;
                    <Link to="HopDong/editHopDong">
                        <Button type='primary'>Sửa</Button></Link>
                </div>
            )
        },

    ];

    deleteHopDongThue = async (maphong) => {
        // console.log("Mã phòng", maphong);
        // alert(maphong)
        const huyHopDong = await axios({
            method: 'PUT',
            url: `http://localhost:4000/huyHopDong/${maphong}`
        })
        // console.log('huyHopDong', huyHopDong);
        if (huyHopDong) {
            alert('Hủy Hợp đồng thành công')
        }
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
        // console.log("mảng hợp đồng", this.props.mangHopDong);
        return (
            <div>
                <div>
                    <h3 className='text-secondary'>Danh Sách Hợp Đồng Thuê Đang Thuê</h3>

                    <div className='d-flex justify-content-between mb-4'>
                        <Link to="/HopDong/HopDongDaThue" className='btn btn-info'>Danh Sách hợp đồng đã thuê</Link>
                        <Link to="/HopDong/themHopDong" className='btn btn-success'>Tạo Hợp Đồng</Link>
                    </div>

                    <Table columns={this.columns} dataSource={this.props.mangHopDong} />
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