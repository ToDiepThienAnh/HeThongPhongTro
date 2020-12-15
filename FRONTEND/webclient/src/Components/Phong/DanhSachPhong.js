import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'



class DanhSachPhong extends Component {

    // state = {
    //     mangPhong: null
    // }

    layDanhSachPhong = () => {
        axios.get('http://localhost:4000/getAllPhong').then(res => this.props.fetchRooms(res.data)).catch(err => { console.log(err); })
    }

    // static getDerivedStateFromProps() {
    //     if (this.props.mangPhong === null) {
    //            this.layDanhSachPhong().then(data => {
    //                this.props.fetchRooms(data)
    //            }).catch( err => console.log(err))
            
    //     }
    // }
    // static getDerivedStateFromProps(props, state) {
        
    // }

    componentDidMount() {
        this.layDanhSachPhong();
    }
    


    // renderDanhSachPhong = () => {
    //     return this.props.mangPhong.map((phong, index) => {
    //         return <div className="card" key={index}>
    //             <div className='card-img-top pl-2 text-secondary'>
    //                 <i style={{ fontSize: 20 }} class="fa fa-home"></i>
    //                 <span className='ml-2' style={{ fontSize: 20 }}>{phong.maphong}</span>
    //             </div>
    //             <div className="card-body pl-2">
    //                 <div>
    //                     <button style={{ fontSize: 14 }} className='btn btn-success px-2 mr-1'>Trả</button>
    //                     <button style={{ fontSize: 14 }} className='btn btn-secondary px-2 mr-1'>Xem</button>
    //                     <button style={{ fontSize: 14 }} className='btn btn-info px-2'>Sửa</button>
    //                 </div>
    //                 <div className='my-4 text-secondary'>
    //                     <i class="fa fa-user"></i>
    //                     <span className='ml-2'>Thiên Anh</span>

    //                 </div>
    //                 <div className='my-3'>
    //                     <i className='text-secondary' class="fa fa-money-bill"></i>
    //                     <span className='ml-2 text-danger'>{phong.giaphong} VNĐ</span>
    //                 </div>
    //                 <div>
    //                     <button style={{ fontSize: 14 }} className='btn btn-info mr-1'>
    //                         <i class="fa fa-edit"></i>
    //                         <span className='ml-1'>Chỉnh sửa</span>
    //                     </button>
    //                     <button style={{ fontSize: 14 }} className='btn btn-danger'>
    //                         <i class="fa fa-trash"></i>
    //                         <span className='ml-1'>Xóa</span>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     })
    // }

    // renderDanhSachPhong = () => {
    //     if(this.props.mangPhong !== null) {
    //         return this.props.mangPhong.map((phong, index) => {
    //             return <tr key={index}>
    //                 <td>{phong.maphong}</td>
    //                 <td>{phong.dientich}</td>
    //                 <td>{phong.succhua}</td>
    //                 <td>{(phong.giaphong).toLocaleString()} VNĐ</td>
    //                 <td></td>
    //             </tr>
    //         })
    //     }

    // }

    render() {
        console.log('fewfw', this.props.mangPhong);

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
                    <button className='btn btn-success my-2 mr-4'><i class="fa fa-bed"></i><span className='ml-2'>Thêm phòng</span></button>
                </div>
                {/* <div className='row border-top pt-3'>
                    <div className='col-2 px-0 pl-2'>
                        {this.renderDanhSachPhong()}




                    </div>

                </div> */}
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Số Phòng</th>
                            <th>Diện tích</th>
                            <th>Sức chứa</th>
                            <th>Giá Phòng</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {this.renderDanhSachPhong()} */}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangPhong: state.PhongReducer.mangPhong
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: (data) => {
            dispatch({
                type: "GET_DANHSACH_PHONG",
                data
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachPhong)