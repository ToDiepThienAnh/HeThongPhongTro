import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { SET_HOPDONG, SET_KHACHHANG_PHONG, SET_MAPHONG_PHONG, SET_MA_KHACHHANG } from '../../Redux/type/type'
import Axios from 'axios'
import { connect } from 'react-redux'
class FormHopDong extends Component {


    // state = {
    //     mangKhachHang: []
    // }


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

    // layThongTinKhachHang = () => {
    //     Axios.get('http://localhost:4000/getAllKhachHang').then(res => this.setState({
    //         mangKhachHang: res.data
    //     })).catch(err => { console.log(err); })
    // }



    componentDidMount() {
        // this.layThongTinPhong();
        // this.layThongTinKhachHang()
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan } = this.props.HopDong.values
        this.themHopDong(maphong, makhachhang, ngaythue, ngayhethan, kythanhtoan, thoihan);
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
                                <div className='col-4 pr-0'><p>Mã Khách Thuê</p></div>
                                <div className='col-8 pl-0'>
                                    <input onChange={this.handleChangeInput} typeInput='number' type="text" name='makhachhang' placeholder="Nhập mã khách thuê" className="form-control" />
                                    {/* <select className='form-control' value={makhachhang} name='makhachhang'>
                                        {this.state.mangKhachHang.map((item, index) => {
                                            return <option key={index} value={item.makhachhang}>{item.hoten}

                                            </option>
                                        })}
                                    </select> */}
                                    <p className='text-danger'>{this.props.HopDong.errors.makhachhang}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số Phòng</p></div>
                                <div className='col-8 pl-0'>
                                    <input onChange={this.handleChangeInput} name='maphong' value={maphong} type="number" placeholder="Nhập số phòng" min='1' className="form-control" />
                                    {/* <select className='form-control' name='maphong' value={maphong} >
                                        {this.props.mangMaPhong[0].map((item, index) => {
                                            return <option key={index} value={item.maphong}>{item.maphong}

                                            </option>
                                        })}
                                    </select> */}
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Thời Hạn HĐ</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input onChange={this.handleChangeInput} type="text" name='thoihan' value={thoihan} className="form-control" />
                                        <span className="input-group-text">Tháng</span>
                                    </div>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Kỳ Thanh Toán</p></div>
                                <div className='col-8 pl-0'>
                                    <div className="input-group mb-3">
                                        <input type="number" min='1' max='6' onChange={this.handleChangeInput} name='kythanhtoan' value={kythanhtoan} placeholder='Kỳ hạn thanh toán từ 1 tháng đến 6 tháng' className="form-control" />
                                        <span className="input-group-text">Tháng</span>
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
        HopDong: state.HopDongReducer.HopDong,
        mangMaPhong: state.HopDongReducer.mangMaPhong
    }
}

export default connect(mapStateToProps)(FormHopDong)