import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SET_DANHSACH_PHONG, SET_KHACHHANG } from '../../Redux/type/type'
import Axios from 'axios'
import { connect } from 'react-redux'

class FormKhachThue extends Component {

    // getMangMaPhong = async () => {
    //     // Axios.get('http://localhost:4000/getMaPhong').then(res => this.props.dispatch({
    //     //     type: 'SET_MANG_MAPHONG',
    //     //     data: res.data
    //     // })).catch(err => { console.log(err); })

    //     const getMaPhong = await Axios({
    //         method: "GET",
    //         url: 'http://localhost:4000/getAllPhong'
    //     })

    //     console.log("get Ma Phong", getMaPhong);
    //     this.props.dispatch({
    //         type: 'SET_MANG_MAPHONG',
    //         data: getMaPhong.data
    //     })
    // }

    // componentDidMount() {
    //     this.getMangMaPhong()
    // }



    themKhachThue = async (hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, trangthai, maphong) => {

        const themKhachThue = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/themKhachThue',
            data: { ... this.props.KhachHang.values }
        })

        if (themKhachThue) {
            console.log('themphong', themKhachThue);
        }

        // Axios.post('http://localhost:4000/themPhong', { tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai }).then(response => response.data)
    }

    handleChangeInput = (event) => {
        let { name, value } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ
        const newValues = { ...this.props.KhachHang.values }
        newValues[name] = value
        console.log(name, value);
        const newErrors = { ...this.props.KhachHang.errors };
        newErrors[name] = value.trim() === '' ? ' Không được bỏ trống !' : '';

        if (typeInput === 'number') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = ' Vui lòng nhập số !';
            }
        }
        this.props.dispatch({
            type: SET_KHACHHANG,
            KhachHang: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = () => {


        let { hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, trangthai, maphong } = this.props.KhachHang.values

        this.themKhachThue(hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, trangthai, maphong)
    }

    render() {
        console.log("Mảng Khach Hang ", this.props.KhachHang.values);
        let { hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, maphong, sodienthoai, cmnd } = this.props.KhachHang.values;
        return (
            <div>
                <h3 className='text-secondary'>Thêm Khách Thuê</h3>
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
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giới tính *</p></div>
                                <div className='col-8 pl-0'>
                                    {/* <select value={gioitinh} className='form-control' name='gioitinh'> */}
                                    {/* <option value=''>--- Chọn giới tính---</option> */}
                                    {/* <option selected="selected" value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                    </select> */}
                                    <input
                                        name='gioitinh' placeholder='Nam hoặc Nữ' type="text" onChange={this.handleChangeInput} value={gioitinh} className="form-control" />
                                </div>
                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số điện thoại *</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>
                            </div>

                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày sinh (dd/MM/yyyy) *</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thuê phòng số</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>CMND/ CCCD *</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nguyên Quán *</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nơi Sinh *</p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thuê phòng số</p></div>
                                <div className='col-8 pl-0' >
                                    {/* <select className='form-control' value={maphong} name='maphong'> */}
                                    {/* render danh sách mã phòng */}
                                    {/* {this.props.mangPhong.map((phong, index) => {
                                            return <option value={phong.maphong} key={index}>
                                                {phong.maphong}
                                            </option>
                                        })} */}

                                    {/* </select> */}
                                    <input onChange={this.handleChangeInput} placeholder='Nhập số phòng' type="number" name='maphong' value={maphong} className="form-control" />
                                </div>
                            </div>
                            <div className='col-4 pr-0'><p>Tiền Phòng</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Email </p></div>
                                <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                            </div>
                        </div>

                    </div>
                    <div className="form-group text-secondary row px-2">
                        <div className='col-2 pr-0'><p>Địa chỉ thường trú *</p></div>
                        <div className='col-10 pl-0'><input type="text" className="form-control" /></div>

                    </div>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        mangPhong: state.PhongReducer.mangPhong,
        KhachHang: state.KhachHangReducer.KhachHang
    }
}

export default connect(mapStateToProps)(FormKhachThue)