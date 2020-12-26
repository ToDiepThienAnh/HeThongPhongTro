import { Button, Table } from 'antd';
import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { SET_DANHSACH_TAISAN } from '../../Redux/type/type';

class DanhSachTaiSan extends Component {

    layDanhSachTaiSan = () => {
        Axios.get('http://localhost:4000/getAllTaiSan').then(res => this.props.dispatch({
            type: SET_DANHSACH_TAISAN,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachTaiSan();
    }
    handleDelete = async (id) => {
        const xoaTaiSan = await Axios({
            method: "DELETE",
            url: `http://localhost:4000/deleteTaiSan/${id}`
        })

        if (xoaTaiSan) {
            console.log('xoaTaiSan', xoaTaiSan);
        }
    }
    columns = [
        {
            title: 'Serial sản phẩm',
            dataIndex: 'serial',
            key: 'serial',
        },
        {
            title: 'tên Tài Sản',
            dataIndex: 'ten',
            key: 'ten',
        },
        {
            title: 'Phòng',
            dataIndex: 'maphong',
            key: 'maphong',
        },
        {
            title: 'Đơn giá ',
            dataIndex: 'dongia',
            key: 'dongia',
            render: (dongia) => <div>{dongia} VNĐ</div>
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: (id) => (
                <div>

                    <Button
                        onClick={() => { this.handleDelete(id) }}
                        danger>Xóa</Button> &nbsp;
                    <Link to={`/TaiSan/editTaiSan/${id}`}>
                        <Button >Sửa</Button></Link>
                </div>
            )
        },

    ];
    render() {
        console.log("mang Tai San", this.props.mangTaiSan);
        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Tài Sản</h3>
                <div className='text-right'>
                    <Link to='/TaiSan/themTaiSan'>
                        <button className='btn btn-success my-2 mr-4'><i className="fa fa-plus"></i><span className='ml-2'>Thêm Tài Sản</span></button>
                    </Link>
                </div>
                <Table columns={this.columns} dataSource={this.props.mangTaiSan} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangTaiSan: state.TaiSanReducer.mangTaiSan
    }
}

export default connect(mapStateToProps)(DanhSachTaiSan)
