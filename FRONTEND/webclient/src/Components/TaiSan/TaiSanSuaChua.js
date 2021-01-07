import { Button, Table } from 'antd';
import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class TaiSanSuaChua extends Component {
    layDanhSachTaiSan = () => {
        Axios.get('http://localhost:4000/getAllTaiSanSuaChua').then(res => this.props.dispatch({
            type: 'SET_DANHSACH_TAISAN_SUACHUA',
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachTaiSan();
    }
    // handleDelete = async (id) => {
    //     const xoaTaiSan = await Axios({
    //         method: "DELETE",
    //         url: `http://localhost:4000/deleteTaiSan/${id}`
    //     })

    //     if (xoaTaiSan) {
    //         console.log('xoaTaiSan', xoaTaiSan);
    //     }
    // }
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
                        // onClick={() => { this.handleDelete(id) }}
                        danger>Hủy</Button> &nbsp;
                    {/* <Link to={`/TaiSan/editTaiSan/${id}`}>
                        <Button >Sửa</Button></Link> */}
                </div>
            )
        },

    ];
    render() {
        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Tài Sản Đang Sửa chữa</h3>
                {/* <div className='text-left'>
                        <Link to='/TaiSan/SuaChua'>
                            <button className='btn btn-primary my-2 mr-4'><span className='ml-2'>Danh sách tài sản sữa chữa</span></button>
                        </Link>
                    </div>
                    <div className='text-right'>
                        <Link to='/TaiSan/themTaiSan'>
                            <button className='btn btn-success my-2 mr-4'><i className="fa fa-plus"></i><span className='ml-2'>Thêm Tài Sản</span></button>
                        </Link>
                    </div> */}
                <div className='text-right'>
                    <Link to='/TaiSan'>
                        <button className='btn btn-warning my-2 mr-2 text-white'> <i className="fa fa-reply mr-2"></i><span className='ml-2'>Quay về</span></button>
                    </Link>
                </div>
                <Table columns={this.columns} dataSource={this.props.mangTaiSanSuaChua} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangTaiSanSuaChua: state.TaiSanReducer.mangTaiSanSuaChua
    }
}

export default connect(mapStateToProps)(TaiSanSuaChua)