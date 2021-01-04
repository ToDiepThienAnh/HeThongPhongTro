import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { ADD_PHONG, SET_PHONG } from '../../Redux/type/type';

class FormPhong extends Component {

    themPhong = async (tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai) => {

        const themPhong = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/themPhong',
            data: { ... this.props.Phong.values }
        })

        if (themPhong) {
            console.log('themphong', themPhong);
        }

        // Axios.post('http://localhost:4000/themPhong', { tenphong, succhua, dientich, giaphong, tinhtrangphong, trangthai }).then(response => response.data)
    }

    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.Phong.values }

        newValues[name] = value
        console.log(name, value);
        //Xử lý errors 
        const newErrors = { ...this.props.Phong.errors }; //Giữ lại các giá trị errors cũ
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
            type: SET_PHONG,
            Phong: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // let valid = true;

        // for (let i in this.props.Phong.errors) {
        //     if (this.props.Phong.errors[i].trim() !== '') {
        //         valid = false
        //     }
        // }
        // for (let i in this.props.Phong.values) {
        //     if (this.props.Phong.values[i].trim() === '') {
        //         valid = false
        //     }
        // }

        // if (!valid) {
        //     alert('Dữ liệu không hợp lệ !');
        //     return;
        // }
        //Xử lý submit => api hoặc redux (dispatch) ...
        // this.props.dispatch({
        //     type: ADD_PHONG
        // })
        let { dientich, giaphong, succhua, tinhtrangphong, trangthai, tenphong } = this.props.Phong.values;
        console.log("Phong", this.props.Phong.values);
        this.themPhong(dientich, giaphong, succhua, tinhtrangphong, trangthai, tenphong);
    }
    render() {
        // console.log(this.props.Phong.values, 'this.props.Phong.values');
        // console.log('props', this.props)
        let { dientich, giaphong, succhua, tinhtrangphong, trangthai, tenphong } = this.props.Phong.values;
        return (
            <div>
                <h3 className='text-secondary'>Thêm Phòng</h3>
                <div className='text-right mr-4 mb-4'>
                    <Link to="/Phong">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button>
                    </Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row text-secondary">
                        <div className="col-6">
                            {/* <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Mã Phòng *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='maphong' value={maphong} className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.maphong}</p>
                                </div>

                            </div> */}
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Phòng *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='tenphong' value={tenphong} className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.tenphong}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Diện tích Phòng *</p></div>
                                <div className='col-8 pl-0'>
                                    {/* <input placeholder="Diện tích phòng phải trên 15 mét vuông" onChange={this.handleChangeInput} name='dientich' value={dientich} type="number" min="15" className="form-control" /> */}
                                    <select className="form-control" value={dientich} onChange={this.handleChangeInput} name='dientich' >
                                        <option >---- Vui lòng chọn diện tích phòng</option>
                                        <option value='15'>15 mét vuông</option>
                                        <option value='18'>18 mét vuông</option>
                                        <option value='20'>20 mét vuông</option>
                                        <option value='22'>22 mét vuông</option>
                                    </select>
                                    <p className='text-danger'>{this.props.Phong.errors.dientich}</p>
                                </div>

                            </div>



                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tình Trạng Phòng</p></div>
                                <select type='radio' onChange={this.handleChangeInput} value={tinhtrangphong} name='tinhtrangphong' className='form-control col-6'>
                                    <option>---Chọn tình trạng phòng---</option>
                                    <option value='false'>Còn Trống</option>
                                    <option value='true'>Đã Thuê</option>
                                </select>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giá Phòng *</p></div>
                                <div className='col-7 pl-0'>
                                    {/* <input placeholder="Trên 1000000 và dưới 2000000" onChange={this.handleChangeInput} min="1000000" max="2000000" name='giaphong' value={giaphong} type="number" className="form-control" /> */}
                                    <select className="form-control" value={giaphong} onChange={this.handleChangeInput} name='giaphong' >
                                        <option >---- Vui lòng chọn giá phòng</option>
                                        <option value='1200000'>1200000 VNĐ</option>
                                        <option value='1500000'>1500000 VNĐ</option>
                                        <option value='1800000'>1800000 VNĐ</option>
                                        <option value='2000000'>2000000 VNĐ</option>
                                    </select>
                                    <p className='text-danger'>{this.props.Phong.errors.giaphong}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Sức chứa tối đa *</p></div>
                                <div className='col-8 pl-0'>
                                    {/* <input typeInput='number' onChange={this.handleChangeInput} name='succhua' value={succhua} type="number" min='1' placeholder="Sức chứa trên 0" className="form-control" /> */}
                                    <select className="form-control" value={succhua} onChange={this.handleChangeInput} name='succhua' >
                                        <option >---- Vui lòng chọn diện Sức chứa của phòng</option>
                                        <option value='3'>tối đa 3 người</option>
                                        <option value='4'>tối đa 4 người</option>
                                        <option value='5'>tối đa 5 người</option>
                                        <option value='6'>tối đa 6 người</option>
                                    </select>
                                    <p className='text-danger'>{this.props.Phong.errors.succhua}</p></div>

                            </div>

                        </div>

                    </div>
                    <div>
                        <div className='text-center'>
                            <button type='submit' onClick={this.handleSubmit} className='btn btn-success px-4'>Lưu</button>
                        </div>
                    </div>
                </form>



                {/* <input name='dientich' value={dientich} type="text" className="form-control" onChange={this.handleChangeInput} />
                <input onChange={this.handleChangeInput} value={succhua} name='succhua' type="text" className="form-control" /> */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Phong: state.PhongReducer.Phong
    }
}

export default withRouter(connect(mapStateToProps)(FormPhong))