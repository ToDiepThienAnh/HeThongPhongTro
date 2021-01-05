import Axios from 'axios'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import moment from 'moment'


class ChiTietKhachThue extends Component {
    state = {
        khachHang: {}
    }

    getKhachHang = async (id) => {
        console.log('id', id)
        const newKhachThue = await Axios({
            method: 'GET',
            url: `http://localhost:4000/getKhachThue/${id}`
        })

        if (newKhachThue && newKhachThue.data) {
            this.setState({
                khachHang: newKhachThue.data[0]
            })
        }
    }

    componentDidMount() {
        const { id = '' } = this.props.match.params;

        this.getKhachHang(id);
    }
    render() {

        return (
            <div>
                <h3 className='text-secondary'>Chi Tiết Khách Thuê</h3>
                <div className='text-right mb-4 mr-4'>
                    <Link to="/KhachThue">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button></Link>
                </div>
                <form>
                    <div className="row text-secondary">
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Họ và tên *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.hoten} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giới tính *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.gioitinh} className="form-control" />
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số điện thoại *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.sodienthoai} className="form-control" /></div>

                            </div>

                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày sinh (dd/MM/yyyy) *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={moment(this.state.khachHang.ngaysinh).format("DD/MM/YYYY")} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thuê phòng số</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.tenphong} className="form-control" /></div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>CMND/ CCCD *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.cmnd} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nguyên Quán *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.nguyenquan} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nơi Sinh *</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.noisinh} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tiền Phòng</p></div>
                                <div className='col-8 pl-0'><input type="text" disabled value={this.state.khachHang.giaphong} className="form-control" /></div>

                            </div>
                            {/* <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Email </p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div> */}
                        </div>

                    </div>
                    <div className="form-group text-secondary row px-2">
                        <div className='col-2 pr-0'><p>Địa chỉ thường trú *</p></div>
                        <div className='col-10 pl-0'><input type="text" disabled value={this.state.khachHang.noithuongtru} className="form-control" /></div>

                    </div>
                </form>
            </div>
        )
    }
}


export default withRouter(ChiTietKhachThue);