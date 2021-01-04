import { Table } from 'antd';
import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment'

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

    }

];
class DanhSachHopDongDaThue extends Component {
    layDanhSachHopDong = () => {
        Axios.get('http://localhost:4000/getAllHopDongDaThue').then(res => this.props.dispatch({
            type: 'SET_DANHSACH_HOPDONG_DATHUE',
            data: res.data
        })).catch(err => { console.log(err); })
    }



    componentDidMount() {
        this.layDanhSachHopDong();
    }
    render() {
        console.log("mangHopDongDaThue", this.props.mangHopDongDaThue);
        return (
            <div>
                <div>
                    <h3 className='text-secondary'>Danh Sách Hợp Đồng Thuê Đã Thuê</h3>

                    <div className='text-right mb-4'>
                        <Link to="/HopDong" className='btn btn-warning text-white'>Quay lại</Link>
                    </div>

                    <Table columns={columns} dataSource={this.props.mangHopDongDaThue} />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangHopDongDaThue: state.HopDongReducer.mangHopDongDaThue
    }
}

export default connect(mapStateToProps)(DanhSachHopDongDaThue)