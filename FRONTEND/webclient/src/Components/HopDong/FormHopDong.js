import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SET_HOPDONG, SET_KHACHHANG_PHONG, SET_MAPHONG_PHONG, SET_MA_KHACHHANG } from '../../Redux/type/type'
import Axios from 'axios'
import { connect } from 'react-redux'
class FormHopDong extends Component {


    // state = {
    //     mangKhachHang: []
    // }
    state = {
        mangPhong: [],
        mangKhachHang: []
    }


    themHopDong = async (maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan) => {

        const themHopDong = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/themHopDong',
            data: { ... this.props.HopDong.values }
        })

        if (themHopDong) {
            console.log('themHopDong', themHopDong);
        }

        // Axios.post('http://localhost:4000/themPhong', { tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai }).then(response => response.data)
    }
    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.HopDong.values }

        newValues[name] = value
        console.log(name, value);
        //Xử lý errors 
        const newErrors = { ...this.props.HopDong.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? ' Không được bỏ trống !' : '';
        if (typeInput === 'number') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = ' Vui lòng nhập số dương!';
            }
        }
        this.props.dispatch({
            type: SET_HOPDONG,
            HopDong: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    // layThongTinPhong = () => {
    //     Axios.get('http://localhost:4000/getMaPhong').then(res => this.props.dispatch({
    //         type: SET_MAPHONG_PHONG,
    //         data: res.data
    //     })).catch(err => { console.log(err); })
    // }

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

    layDanhSachKhachHang = async () => {
        const layDanhSachKhachHang = await Axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllKhachHang'
        })

        if (layDanhSachKhachHang) {
            this.setState({
                mangKhachHang: layDanhSachKhachHang.data
            })
        }
    }

    // layThongTinKhachHang = () => {
    //     Axios.get('http://localhost:4000/getAllKhachHang').then(res => this.setState({
    //         mangKhachHang: res.data
    //     })).catch(err => { console.log(err); })
    // }



    componentDidMount() {
        this.layDanhSachPhong();
        this.layDanhSachKhachHang();
    }

    handleSubmit = (event) => {
        event.preventDefault();



        let { maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan } = this.props.HopDong.values

        if (new Date(ngayhethan).getTime() < new Date(ngaythue).getTime()) {
            alert('Ngày kết thúc hợp đồng phải lớn hơn ngày thuê')
            return
        }

        this.themHopDong(maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan);
        alert('Thêm thành công ')
    }

    render() {
        // console.log(this.props.mangMaPhong, "mang Ma Phong");
        // console.log(this.state.mangKhachHang, "mang Khach Hang");
        console.log("Hop Dong", this.props.HopDong.values);
        let { maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan } = this.props.HopDong.values
        return (
            <div>
                <h3 className='text-secondary py-2'>Lập Hợp Đồng Mới</h3>
                <div className='text-right mb-4 mr-4'>
                    <Link to="/HopDong">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button></Link>
                </div>
                <form>
                    <div className='row text-secondary'>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p> Khách Thuê</p></div>
                                <div className='col-8 pl-0'>
                                    {/* <input onChange={this.handleChangeInput} typeInput='number' type="text" name='makhachhang' placeholder="Nhập mã khách thuê" className="form-control" /> */}
                                    <select className='form-control' onChange={this.handleChangeInput} value={makhachhang} name='makhachhang'>
                                        <option>-- Vui lòng chọn khách thuê ---</option>
                                        {this.state.mangKhachHang.map((item, index) => {
                                            return <option key={index} value={item.makhachhang}>{item.hoten}

                                            </option>
                                        })}
                                    </select>
                                    <p className='text-danger'>{this.props.HopDong.errors.makhachhang}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p> Phòng</p></div>
                                <div className='col-8 pl-0'>
                                    {/* <input onChange={this.handleChangeInput} name='maphong' value={maphong} type="number" placeholder="Nhập số phòng" min='1' className="form-control" /> */}
                                    <select onChange={this.handleChangeInput} className='form-control' name='maphong' value={maphong} >
                                        <option>-- Vui lòng chọn phòng ---</option>
                                        {this.state.mangPhong.map((phong, index) => {
                                            return <option key={index} value={phong.maphong}>
                                                {phong.tenphong}
                                            </option>
                                        })}
                                    </select>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thời Hạn HĐ</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        {/* <input onChange={this.handleChangeInput} type="number" name='thoihan' value={thoihan} max='6' min='1' placeholder='Thời hạn hợp đồng tối đa ' className="form-control" /> */}
                                        <select className='form-control' onChange={this.handleChangeInput} name='thoihan' value={thoihan}>
                                            <option>-- Vui lòng chọn thời hạn hợp đồng --- </option>
                                            <option value='1'>1 tháng</option>
                                            <option value='3'>3 tháng</option>
                                            <option value='6'>6 tháng </option>
                                            <option value='12'>1 năm </option>
                                        </select>
                                        {/* <span className="input-group-text">Tháng</span> */}
                                    </div>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Kỳ Thanh Toán</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        {/* <input type="number" min='1' max='6' onChange={this.handleChangeInput} name='kythanhtoan' value={kythanhtoan} placeholder='Kỳ hạn thanh toán từ 1 tháng đến 6 tháng' className="form-control" />
                                        <span className="input-group-text">Tháng</span> */}
                                        <select className='form-control' onChange={this.handleChangeInput} name='kythanhtoan' value={kythanhtoan}>
                                            <option> Vui lòng chọn kỳ thanh toán </option>
                                            <option value='1'>1 tháng</option>
                                            <option value='3'>3 tháng</option>
                                            <option value='6'>6 tháng </option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày Tạo HĐ</p></div>
                                <div className='col-8 pl-0'><input
                                    name='ngaythue' type="date" onChange={this.handleChangeInput} value={ngaythue} className="form-control" />
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Ngày Hết Hạn HĐ</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='ngayhethan' value={ngayhethan} type="date" className="form-control" /></div>

                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-danger'>* Ngày hết hạn phải lớn hơn ngày tạo Hợp Đồng</p>
                    </div>
                    <div className='text-center'>
                        <button type="submit" onClick={this.handleSubmit} className='btn btn-success'>Lưu thông tin</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        HopDong: state.HopDongReducer.HopDong
    }
}

export default connect(mapStateToProps)(FormHopDong)