import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { SET_DANHSACH_PHONG, SET_KHACHHANG } from '../../Redux/type/type'
import Axios from 'axios'
import { connect } from 'react-redux'
import { isEqual } from 'lodash'
import moment from 'moment'

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
    state = {
        mangPhong: [],
        soLuongKhachThue: 0
    }


    layDanhSachPhong = async () => {
        const layDanhSachPhong = await Axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllPhong'
        })

        if (layDanhSachPhong) {
            this.setState({
                mangPhong: layDanhSachPhong.data
            })
        }
    }

    tinhSoLuongKhachThue = async (maphong) => {
        const soLuongKhachThue = await Axios({
            method: 'GET',
            url: `http://localhost:4000/countKhachHang/${maphong}`
        })
        if (soLuongKhachThue) {
            this.setState({
                soLuongKhachThue: soLuongKhachThue.data
            })
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);

        this.layDanhSachPhong()


        const newValues = { ...this.props.KhachHang.values };

        newValues.maphong = this.props.match.params.id
        this.props.dispatch({
            type: SET_KHACHHANG,
            KhachHang: {
                ...this.props.KhachHang,
                values: newValues
            }
        })
    }

    componentDidUpdate(preProps, preState) {
        console.log('dfajoisd');
        if (!isEqual(preProps.KhachHang.values, this.props.KhachHang.values)) {

        }
    }



    themKhachThue = async (hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, maphong) => {
        var sucChuaToiDa = 0
        var count = 0
        for (const item in this.props.mangKhachHang) {


            if (this.props.mangKhachHang[item].maphong === parseInt(maphong)) {
                count++
            }

        }
        for (const item in this.state.mangPhong) {


            if (this.state.mangPhong[item].maphong === parseInt(maphong)) {
                sucChuaToiDa = this.state.mangPhong[item].succhua
            }

        }
        console.log("count ", count);
        console.log("Sức chứa tối đa", sucChuaToiDa);
        if (count >= sucChuaToiDa) {
            alert('Phòng đã đủ người rồi !!')
            return
        }

        for (const i in this.props.mangKhachHang) {
            if (this.props.mangKhachHang[i].cmnd === cmnd) {
                alert('CMND/CCCD không được trùng')
                return
            }
        }

        const themKhachThue = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/themKhachThue',
            data: { ... this.props.KhachHang.values }
        })

        if (themKhachThue) {
            console.log('themphong', themKhachThue);
            await Axios({
                method: "PUT",
                url: `http://localhost:4000/checkedTinhTrangPhong/${this.props.KhachHang.values.maphong}`

            })
            alert("Thêm khách thuê thành công")
        }

        // Axios.post('http://localhost:4000/themPhong', { tenphong, succhua, dientich, giaphong, tinhtrangphong }).then(response => response.data)
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

    handleSubmit = (e) => {
        e.preventDefault()


        let { hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, maphong } = this.props.KhachHang.values

        if (cmnd.trim().length !== 9 && cmnd.trim().length !== 12) {
            alert('CMND phải có 9 số và CCCD phải có 12 số')
            return

        }
        if (sodienthoai.trim().length > 11 || sodienthoai.trim().length < 10) {
            alert('Số điện thoại phải có 10 tới 11 số')
            return

        }



        if (this.themKhachThue(hoten, noithuongtru, noisinh, nguyenquan, ngaysinh, gioitinh, sodienthoai, cmnd, maphong)) {
            alert('Thêm thành công')
        }
    }

    render() {
        console.log("Danh Sách Phòng ", this.state);
        console.log("Danh Sách Khách Hàng ", this.props.mangKhachHang);
        // console.log("chiều dài của mảng phòng", this.state.mangPhong.length);
        // console.log('router', this.props);
        // console.log("Mảng Khach Hang ", this.props.KhachHang.values);
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
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='hoten' value={hoten} type="text" className="form-control" />
                                    <p className='text-danger'>{this.props.KhachHang.errors.hoten}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giới tính *</p></div>
                                <div className='col-8 pl-0'>
                                    <select value={gioitinh} onChange={this.handleChangeInput} className='form-control' name='gioitinh'>
                                        <option>--- Chọn giới tính---</option>
                                        <option value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số điện thoại *</p></div>
                                <div className='col-8 pl-0'
                                ><input type="text" typeInput='number' onChange={this.handleChangeInput} name='sodienthoai' value={sodienthoai} className="form-control" />
                                    <p className='text-danger'>{this.props.KhachHang.errors.sodienthoai}</p></div>

                            </div>

                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày sinh (dd/MM/yyyy) *</p></div>
                                <div className='col-8 pl-0'><input
                                    name='ngaysinh' type="date" onChange={this.handleChangeInput} value={ngaysinh} className="form-control" max={moment('2005-1-1').format('YYYY-MM-DD')} />
                                    <p className='text-danger'>{this.props.KhachHang.errors.ngaysinh}</p></div>

                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>CMND/ CCCD *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='cmnd' value={cmnd} typeInput='number' type="text" className="form-control" />
                                    <p className='text-danger'>{this.props.KhachHang.errors.cmnd}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nguyên Quán *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} type="text" name='nguyenquan' value={nguyenquan} className="form-control" />
                                    <p className='text-danger'>{this.props.KhachHang.errors.nguyenquan}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Nơi Sinh *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} type="text" name='noisinh' value={noisinh} className="form-control" />
                                    <p className='text-danger'>{this.props.KhachHang.errors.noisinh}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thuê phòng </p></div>
                                <div className='col-8 pl-0'>
                                    {/* <input onChange={this.handleChangeInput} type="text" name='maphong' value={maphong} className="form-control" /> */}
                                    <select onChange={this.handleChangeInput} name='maphong' value={maphong} className="form-control">
                                        <option>-- Vui lòng chọn phòng thuê ---</option>
                                        {this.state.mangPhong.map((phong, index) => {
                                            return <option key={index} value={phong.maphong}>
                                                {phong.tenphong}
                                            </option>
                                        })}
                                    </select>
                                </div>

                            </div>
                            {/* <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Tiền Phòng</p></div>
                            <div className='col-8 pl-0'><input type="text" className="form-control" /></div>

                        </div> */}
                            {/* <div className="form-group row px-2">
                            <div className='col-4 pr-0'><p>Email </p></div>
                            <div className='col-8 pl-0'><input type="text" name='email' value={email} className="form-control" /></div>

                        </div> */}
                        </div>

                    </div>
                    <div className="form-group text-secondary row px-2">
                        <div className='col-2 pr-0'><p>Địa chỉ thường trú *</p></div>
                        <div className='col-10 pl-0'><input onChange={this.handleChangeInput} name='noithuongtru' value={noithuongtru} type="text" className="form-control" />
                            <p className='text-danger'>{this.props.KhachHang.errors.noithuongtru}</p></div>

                    </div>
                    <div className='text-center'>
                        <button onClick={this.handleSubmit} className='btn btn-success px-3'>Lưu</button>
                    </div>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        mangPhong: state.PhongReducer.mangPhong,
        KhachHang: state.KhachHangReducer.KhachHang,
        mangKhachHang: state.KhachHangReducer.mangKhachHang
    }
}

export default withRouter(connect(mapStateToProps)(FormKhachThue))