import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_TAISAN } from '../../Redux/type/type'

class ThemTaiSan extends Component {
    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.TaiSan.values }

        newValues[name] = value
        console.log(name, value);
        //Xử lý errors 
        const newErrors = { ...this.props.TaiSan.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? ' Không được bỏ trống !' : '';

        if (typeInput === 'number') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = ' Vui lòng nhập số dương!';
            }
        }


        console.log(newValues);
        this.props.dispatch({
            type: SET_TAISAN,
            TaiSan: {
                values: newValues,
                errors: newErrors
            }
        })
    }
    ThemTaiSan = async (ten, serial, dongia, maphong) => {

        const ThemTaiSan = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/ThemTaiSan',
            data: { ... this.props.TaiSan.values }
        })

        if (ThemTaiSan) {
            console.log('ThemTaiSan', ThemTaiSan);
        }

        // Axios.post('http://localhost:4000/themPhong', { tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai }).then(response => response.data)
    }
    handleSubmit = (event) => {
        event.preventDefault();

        let { ten, serial, maphong, dongia } = this.props.TaiSan.values;
        this.ThemTaiSan(ten, serial, maphong, dongia);
    }
    render() {
        console.log("Tai San", this.props.TaiSan.values);
        let { serial, dongia, ten, maphong } = this.props.TaiSan.values
        return (
            <div>
                <h3 className='text-secondary'>Thêm Tài Sản</h3>
                <div className='text-right mr-4 mb-4'>
                    <Link to="/TaiSan">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button>
                    </Link>
                </div>
                <form>
                    <div className="row text-secondary">
                        <div className="col-6">

                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Số Serial Sản Phẩm *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='serial' value={serial} className="form-control" />
                                    <p className='text-danger'>{this.props.TaiSan.errors.serial}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Phòng *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='maphong' value={maphong} type="number" min="1" className="form-control" />
                                    <p className='text-danger'>{this.props.TaiSan.errors.maphong}</p>
                                </div>

                            </div>



                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Tài Sản *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='ten' value={ten} type="text" className="form-control" />
                                    <p className='text-danger'>{this.props.TaiSan.errors.ten}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Đơn Giá *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='dongia' value={dongia} type="number" min="10000" className="form-control" />
                                    <p className='text-danger'>{this.props.TaiSan.errors.dongia}</p>
                                </div>

                            </div>


                        </div>

                    </div>
                    <div className='text-center'>
                        <button type='submit' onClick={this.handleSubmit} className='btn btn-success px-4'>Lưu</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        TaiSan: state.TaiSanReducer.TaiSan
    }
}


export default connect(mapStateToProps)(ThemTaiSan)