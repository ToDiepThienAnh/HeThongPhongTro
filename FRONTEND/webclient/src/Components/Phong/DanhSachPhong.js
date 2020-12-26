// Libraries
import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { SET_DANHSACH_PHONG } from '../../Redux/type/type';
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
        render: (maPhong) => (
            <div>
                <Link to={`/Phong/chiTietPhong/${maPhong}`}>
                    <Button type='primary'>Xem chi tiết</Button>
                </Link> &nbsp;
                <Button danger>Xóa</Button> &nbsp;
                <Link to={`/Phong/editPhong/${maPhong}`}>
                    <Button>Sửa</Button></Link>
            </div>
        )
    },

];

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

class DanhSachPhong extends Component {
    // state = {
    //     mangPhong: []
    // }
    // // state = {
    // //     mangPhong: null
    // // }

    layDanhSachPhong = () => {
        axios.get('http://localhost:4000/getAllPhong').then(res => this.props.dispatch({
            type: SET_DANHSACH_PHONG,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachPhong();
    }

    renderDanhSachPhong = () => {
        if (this.props.mangPhong !== null) {
            return this.props.mangPhong.map((phong, index) => {
                return <tr key={index}>
                    <td>{phong.maphong}</td>
                    <td>{phong.dientich}</td>
                    <td>{phong.succhua}</td>
                    <td>{(phong.giaphong)} VNĐ</td>
                    <td></td>
                </tr>
            })
        }

    }

    render() {
        // console.log('mảng Phòng', this.props.mangPhong);

        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Phòng</h3>
                <div className='d-flex justify-content-start mt-3' style={{ gap: '10px' }}>

                    <select className='p-2 text-light bg-info' style={{ cursor: 'pointer', fontSize: '18px' }}>
                        <option>Còn trống</option>
                        <option>Cho Thuê</option>
                    </select>
                    <select className='p-2 text-light bg-info' style={{ cursor: 'pointer', fontSize: '18px' }}>
                        <option>Đã thu phí</option>
                        <option>Chưa thu phí</option>
                    </select>
                    <input className='form-control w-25'></input>
                    <button className='btn btn-primary '><i class="fa fa-search"></i><span>Tìm kiếm</span></button>
                </div>
                <div className='pb-4 border-bottom'>
                    <span>Còn trống 1 |</span>
                    <span> Đã cho thuê 1 |</span>
                    <span> Chưa thu phí 1 |</span>
                    <span> Đã thu phí 1 |</span>
                </div>
                <div className='text-right'>
                    <Link to='/Phong/themPhong'>
                        <button className='btn btn-success my-2 mr-4'><i class="fa fa-bed"></i><span className='ml-2'>Thêm phòng</span></button>
                    </Link>
                </div>

                <Table columns={columns} dataSource={this.props.mangPhong} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangPhong: state.PhongReducer.mangPhong
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchRooms: (data) => {
//             dispatch({
//                 type: "GET_DANHSACH_PHONG",
//                 data
//             })
//         }
//     }
// }

export default connect(mapStateToProps)(DanhSachPhong)