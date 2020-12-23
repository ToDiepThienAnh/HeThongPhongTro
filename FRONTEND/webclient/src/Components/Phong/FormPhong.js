import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SET_PHONG } from '../../Redux/type/type';

class FormPhong extends Component {


    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.Phong.values }
        newValues[name] = value
        console.log(name, value);
        //Xử lý errors 
        const newErrors = { ...this.props.Phong.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        // newErrors[name] = value.trim() === '' ? ' không được bỏ trống !' : '';
        // if (typeInput === 'email') {
        //     const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        //     if (!regexEmail.test(value)) {
        //         newErrors[name] = ' Vui lòng nhập với dạng abc@email.com !';
        //     }
        // }

        // if (typeInput === 'phone') {
        //     const regexNumber = /^[0-9]+$/;
        //     if (!regexNumber.test(value)) {
        //         newErrors[name] = ' Vui lòng nhập số !';
        //     }
        // }

        this.props.dispatch({
            type: SET_PHONG,
            Phong: {
                values: newValues,
                errors: newErrors
            }
        })
    }
    render() {
        console.log(this.props.Phong.values);
        return (
            <div>
                <h3 className='text-secondary'>Thêm Phòng</h3>
                {/* <form>
                    <div className="row text-secondary">
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Phòng *</p></div>
                                <div className='col-8 pl-0'><input type='text' onChange={this.handleChangeInput} name='tenphong' value={tenphong} className="form-control" /></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Diện tích Phòng *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='dientich' value={dientich} type="text" className="form-control" />
                                </div>

                            </div>


                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Sức chứa tối đa *</p></div>
                                <div className='col-8 pl-0'><input onChange={this.handleChangeInput} name='succhua' value={succhua} type="text" className="form-control" /></div>

                            </div>

                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tình Trạng Phòng</p></div>
                                <select name='tinhtrangphong' className='form-control col-6'>
                                    <option>---Chọn tình trạng phòng---</option>
                                    <option>Còn Trống</option>
                                    <option>Đã Thuê</option>
                                </select>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giá Phòng *</p></div>
                                <div className='col-7 pl-0'><input onChange={this.handleChangeInput} name='giaphong' value={giaphong} type="text" className="form-control" /></div>

                            </div>
                        </div>
                    </div>
                </form> */}
                <input onChange={this.handleChangeInput} name='dientich' type="date" className="form-control" />
                <input onChange={this.handleChangeInput} name='succhua' type="text" className="form-control" />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        Phong: state.PhongReducer.Phong
    }
}

export default connect(mapStateToProps)(FormPhong)