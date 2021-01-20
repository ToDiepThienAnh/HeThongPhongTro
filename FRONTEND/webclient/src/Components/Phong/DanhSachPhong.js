// Libraries
import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { Table, Button } from 'antd';
import { DELELTE_PHONG, SET_DANHSACH_PHONG } from '../../Redux/type/type';
import { Link } from 'react-router-dom';
import { value } from 'numeral';



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

    columns = [
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
            title: 'Trạng thái phòng',
            dataIndex: 'tinhtrangphong',
            key: 'tinhtrangphong',
            render: (tinhtrangphong) => <div>{tinhtrangphong === 'true' ? 'Đã Thuê' : 'Còn Trống'}</div>
        },
        {
            title: '',
            dataIndex: 'options',
            key: 'options',
            render: (maPhong, record) => (
                <div>
                    {record.tinhtrangphong === 'true' ? (
                        <>
                            <Link to={`/Phong/chiTietPhong/${maPhong}`}>
                                <Button type='primary'>Xem chi tiết</Button>
                            </Link> &nbsp;
                            <Button onClick={() => { this.handleDelete(maPhong) }} danger>Xóa</Button> &nbsp;
                            <Link to={`/Phong/editPhong/${maPhong}`}>
                                <Button>Sửa</Button></Link> &nbsp;

                            <Button type='primary' onClick={() => { this.traPhong(maPhong) }} danger>Trả Phòng</Button>
                        </>
                    ) : (
                            <Link to={`/KhachThue/themKhachThue/${record.maphong}`}>
                                <Button type='ghost'>Thêm khách</Button>
                            </Link>
                        )}
                </div>
            )
        },

    ];
    state = {
        defaultPhongs: [],
        mangHopDong: []
    }

    handleDelete = (maPhong) => {
        console.log(maPhong);
        this.props.dispatch({
            type: DELELTE_PHONG,
            maPhong
        })
    }

    traPhong = async (maphong) => {

        if (window.confirm('Xác nhận trả phòng?')) {

            for (const hopdong of this.state.mangHopDong) {
                if (hopdong.maphong === maphong) {
                    if (new Date(hopdong.ngayhethan).getTime() > new Date().getTime()) {
                        if (window.confirm('Bạn phải mất tiền cọc !!!')) {
                            console.log(" mất cọc");
                            let xoaKhachThue = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/xoaKhachThueTheoMaPhong/${maphong}`
                            })

                            const xoaHopDong = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/huyHopDong/${maphong}`
                            })

                            const setTrangThaiPhong = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/rejectTinhTrangPhong/${maphong}`
                            })
                            if (setTrangThaiPhong && xoaHopDong && xoaKhachThue) {
                                alert('trả phòng thành công')
                            }
                        } else {
                            console.log('Thing was not saved to the database.');
                            return
                        }
                    } else {
                        if (window.confirm('Bạn không mất tiền cọc !!')) {
                            console.log("Không mất cọc");
                            let xoaKhachThue = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/xoaKhachThueTheoMaPhong/${maphong}`
                            })

                            const xoaHopDong = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/huyHopDong/${maphong}`
                            })

                            const setTrangThaiPhong = await axios({
                                method: 'PUT',
                                url: `http://localhost:4000/rejectTinhTrangPhong/${maphong}`
                            })
                            if (setTrangThaiPhong && xoaHopDong && xoaKhachThue) {
                                alert('trả phòng thành công')
                            }
                        } else {
                            console.log('Thing was not saved to the database.');
                            return
                        }
                    }

                }
            }

            // let xoaKhachThue = await axios({
            //     method: 'PUT',
            //     url: `http://localhost:4000/xoaKhachThueTheoMaPhong/${maphong}`
            // })

            // const xoaHopDong = await axios({
            //     method: 'PUT',
            //     url: `http://localhost:4000/huyHopDong/${maphong}`
            // })

            // const setTrangThaiPhong = await axios({
            //     method: 'PUT',
            //     url: `http://localhost:4000/rejectTinhTrangPhong/${maphong}`
            // })


        } else {
            // Do nothing!
            console.log('Thing was not saved to the database.');
            return
        }

    }

    layDanhSachHopDong = async () => {
        const layDanhSachHopDong = await axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllHopDongThue'
        })
        if (layDanhSachHopDong) {
            this.setState({
                mangHopDong: layDanhSachHopDong.data
            })
        }
    }

    layDanhSachPhong = () => {
        axios.get('http://localhost:4000/getAllPhong').then(res => {
            this.props.dispatch({
                type: SET_DANHSACH_PHONG,
                data: res.data
            })

            this.setState({
                defaultPhongs: res.data
            })
        }).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachPhong();
        this.layDanhSachHopDong();
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

    onChangeSelect = (event) => {
        let newMangPhong = [...this.state.defaultPhongs]

        if (event.target.value !== 'all') {
            newMangPhong = this.state.defaultPhongs.filter(phong => {
                return phong.tinhtrangphong === event.target.value
            })
        }

        this.props.dispatch({
            type: SET_DANHSACH_PHONG,
            data: newMangPhong
        })
    }

    render() {
        // console.log('mảng Phòng', this.props.mangPhong);

        return (
            <div>
                <h3 className='text-secondary'>Danh Sách Phòng</h3>
                <div className='d-flex justify-content-start mt-3' style={{ gap: '10px' }}>

                    <select onChange={this.onChangeSelect} className='p-2 text-light bg-info' style={{ cursor: 'pointer', fontSize: '18px' }}>
                        <option value='all'>Tất cả</option>
                        <option value='false'>Còn trống</option>
                        <option value='true'>Cho Thuê</option>
                    </select>
                    <select className='p-2 text-light bg-info' style={{ cursor: 'pointer', fontSize: '18px' }}>
                        <option>Đã thu phí</option>
                        <option>Chưa thu phí</option>
                    </select>
                    <input className='form-control w-25'></input>
                    <button className='btn btn-primary '><i class="fa fa-search"></i><span>Tìm kiếm</span></button>
                </div>
                {/* <div className='pb-4 border-bottom'>
                    <span>Còn trống 1 |</span>
                    <span> Đã cho thuê 1 |</span>
                    <span> Chưa thu phí 1 |</span>
                    <span> Đã thu phí 1 |</span>
                </div> */}
                <div className='text-right'>
                    <Link to='/Phong/themPhong'>
                        <button className='btn btn-success my-2 mr-4'><i class="fa fa-bed"></i><span className='ml-2'>Thêm phòng</span></button>
                    </Link>
                </div>

                <Table columns={this.columns} dataSource={this.props.mangPhong} />
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