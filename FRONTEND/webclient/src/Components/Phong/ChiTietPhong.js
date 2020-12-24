import Axios from 'axios'
import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class ChiTietPhong extends Component {
    state = {
        phong: {}
    }

    getPhong = async (id) => {
        console.log('id', id)
        const newPhong = await Axios({
            method: 'GET',
            url: `http://localhost:4000/getPhong/${id}`
        })

        if (newPhong && newPhong.data) {
            this.setState({
                phong: newPhong.data[0]
            })
        }
    }

    componentDidMount() {
        const { id = '' } = this.props.match.params;

        this.getPhong(id);
    }



    render() {
        console.log('phong', this.state.phong)
        return (
            <div>
                <h3 className='text-secondary'>Chi Tiết Phòng</h3>
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
                                <div className='col-8 pl-0'><input disabled type='text' name='maphong' className="form-control" />
                                    <p className='text-danger'></p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tên Phòng *</p></div>
                                <div className='col-8 pl-0'><input disabled type='text' name='tenphong' className="form-control" />
                                    <p className='text-danger'></p>
                                </div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Diện tích Phòng *</p></div>
                                <div className='col-8 pl-0'><input disabled typeInput='number' name='dientich' type="text" className="form-control" />
                                    <p className='text-danger'></p>
                                </div>

                            </div>




                        </div>
                        <div className="col-6">
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Tình Trạng Phòng</p></div>
                                <select disabled type='radio' name='tinhtrangphong' className='form-control col-6'>
                                    <option>---Chọn tình trạng phòng---</option>
                                    <option value={true}>Còn Trống</option>
                                    <option value={false}>Đã Thuê</option>
                                </select>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Giá Phòng *</p></div>
                                <div className='col-7 pl-0'><input disabled typeInput='number' name='giaphong' type="text" className="form-control" />
                                    <p className='text-danger'></p></div>

                            </div>
                            <div className="form-group row px-2">
                                <div className='col-4 pr-0'><p>Sức chứa tối đa *</p></div>
                                <div className='col-8 pl-0'><input disabled typeInput='number' name='succhua' type="text" className="form-control" />
                                    <p className='text-danger'></p></div>

                            </div>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ChiTietPhong);