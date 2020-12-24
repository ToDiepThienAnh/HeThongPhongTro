import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class ChinhSuaPhong extends Component {
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
        // this.props.dispatch({
        //     type: SET_PHONG,
        //     Phong: {
        //         values: newValues,
        //         errors: newErrors
        //     }
        // })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let valid = true;


        if (!valid) {
            alert('Dữ liệu không hợp lệ !');
            return;
        }

        // this.props.dispatch({
        //     type: ADD_PHONG
        // })
    }
    render() {
        let { maphong, dientich, giaphong, succhua, tinhtrangphong, trangthai, tenphong } = this.props.Phong.values;
        return (
            <div>
                <h3 className='text-secondary'>Chỉnh Sửa thông tin Phòng</h3>
                <div className='text-right mr-4 mb-4'>
                    <Link to="/Phong">
                        <button className='btn btn-warning  text-white'>
                            <i className="fa fa-reply mr-2"></i>
                            <span>Quay về</span>
                        </button></Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row text-secondary">
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Mã Phòng *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='maphong' value={maphong} className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.maphong}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Phòng *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='tenphong' value={tenphong} className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.tenphong}</p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Diện tích Phòng *</p></div>
                                <div className='col-8 pl-0'><input typeInput='number' onChange={this.handleChangeInput} name='dientich' value={dientich} type="text" className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.dientich}</p>
                                </div>

                            </div>




                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tình Trạng Phòng</p></div>
                                <select type='radio' onChange={this.handleChangeInput} value={tinhtrangphong} name='tinhtrangphong' className='form-control col-6'>
                                    <option>---Chọn tình trạng phòng---</option>
                                    <option value={true}>Còn Trống</option>
                                    <option value={false}>Đã Thuê</option>
                                </select>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giá Phòng *</p></div>
                                <div className='col-7 pl-0'><input typeInput='number' onChange={this.handleChangeInput} name='giaphong' value={giaphong} type="text" className="form-control" />
                                    <p className='text-danger'>{this.props.Phong.errors.giaphong}</p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Sức chứa tối đa *</p></div>
                                <div className='col-8 pl-0'><input name='succhua' type="number" min='1' placeholder="Sức chứa trên 0" className="form-control" />
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
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Phong: state.PhongReducer.Phong
    }
}

export default withRouter(connect(mapStateToProps)(ChinhSuaPhong))