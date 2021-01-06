import { Button, InputNumber, Table } from 'antd'
import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_DANHSACH_DICHVU, SET_HOADON, UPDATE_CHISO } from '../../Redux/type/type'
import numeral from 'numeral'
import moment from 'moment'
import { isEqual } from 'lodash'

class FormHoaDon extends Component {
    state = {
        mangPhong: [],
        giaphong: 0
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

    layDanhSachDichVu = () => {
        Axios.get('http://localhost:4000/getALlDichVu').then(res => this.props.dispatch({
            type: SET_DANHSACH_DICHVU,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachDichVu()
        this.layDanhSachPhong()
    }

    onChangeChiso = (value, index) => {
        this.props.dispatch({
            type: UPDATE_CHISO,
            data: {
                index, value
            }
        })

        this.caculateTotal(this.state.giaphong)
    }

    columns = [
        {
            title: 'Mã dịch vụ',
            dataIndex: 'madichvu',
            key: 'madichvu',
        },
        {
            title: 'Tên dịch vụ',
            dataIndex: 'tendichvu',
            key: 'tendichvu',
        },
        {
            title: 'Giá',
            dataIndex: 'giadichvu',
            key: 'giadichvu',
        },
        {
            title: 'Chỉ số sử dụng',
            dataIndex: 'chiso',
            key: 'chiso',
            render: (value, _, index) => {
                // console.log("value, record, index", value, index)
                return < InputNumber min={0} defaultValue={0} onChange={(e) => this.onChangeChiso(e, index)} />
            }
        },
        {
            title: 'Tổng tiền dịch vụ',
            dataIndex: 'tongtiendichvu',
            key: 'tongtiendichvu',
            render: (_, record) => {
                return <div>{numeral(record.giadichvu * record.chiso).format('0,0')} vnđ</div>
            }
        },
    ];

    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    renderTotal = () => {
        const { mangDichVu } = this.props
        // console.log("FormHoaDon -> renderTotal -> mangDichVu", mangDichVu)
        const total = mangDichVu.reduce((accumulator, currentValue) => {
            // console.log("FormHoaDon -> renderTotal -> currentValue", currentValue)
            // console.log("FormHoaDon -> renderTotal -> accumulator", accumulator)
            return accumulator + (+currentValue.tongtiendichvu)
        }, 0)

        return <div>
            Tổng tiền: {numeral(total).format('0,0')} vnd
        </div>
    }

    themHoaDon = async (tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi, namthanhtoan) => {
        console.log("Props them Hoa Don", this.props.HoaDon.values);
        const themHoaDon = await Axios({
            method: "POST",
            url: "http://localhost:4000/themHoaDon",
            data: { ...this.props.HoaDon.values }
        })
    }

    caculateTotal = (giaphong) => {
        console.log("FormHoaDon -> caculateTotal -> giaphong", giaphong)
        const { mangDichVu } = this.props
        // console.log("FormHoaDon -> renderTotal -> mangDichVu", mangDichVu)
        const total = mangDichVu.reduce((accumulator, currentValue) => {
            // console.log("FormHoaDon -> renderTotal -> currentValue", currentValue)
            // console.log("FormHoaDon -> renderTotal -> accumulator", accumulator)
            return accumulator + (+currentValue.tongtiendichvu)
        }, 0)
        const final = +giaphong + (+total);
        // console.log("FormHoaDon -> caculateTotal -> final", final)
        const newValues = { ...this.props.HoaDon.values }
        console.log("Calculate ::", "gia phong::", giaphong)
        newValues.thanhtien = final;

        return newValues
    }

    handleChangeInput = (event, type) => {
        let giaphong
        if (type === 'maphong') {
            giaphong = document.getElementById(`form-hoa-don-phong-${event.target.value}`).getAttribute('giaphong')
            this.setState({
                giaphong
            })
        }
        // console.log("FormHoaDon -> handleChangeInput -> giaphong", giaphong)
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.HoaDon.values }

        newValues[name] = value
        //Xử lý errors 
        const newErrors = { ...this.props.HoaDon.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? ' Không được bỏ trống !' : '';

        if (typeInput === 'number') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = ' Vui lòng nhập số dương!';
            }
        }

        let thanhtien = { ...newValues }
        if (type === 'maphong') {
            thanhtien = this.caculateTotal(giaphong)
        }

        newValues.thanhtien = thanhtien.thanhtien
        this.props.dispatch({
            type: SET_HOADON,
            HoaDon: {
                errors: newErrors,
                values: newValues
            }
        })



    }

    handleSubmit = (e) => {
        let { tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi } = this.props.HoaDon.values
        this.themHoaDon(tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi);
    }

    // onClickPhong = (phong) => {
    //     console.log("FormHoaDon -> onClickPhong -> phong", phong)
    // }

    render() {
        console.log("Hoa Don", this.props.HoaDon);
        // console.log("mảng Dịch vụ", this.props.mangDichVu);
        let { tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi } = this.props.HoaDon.values
        return (
            <div className='container text-secondary'>
                <div className='d-flex justify-content-between'>
                    <h1 className=''>Thêm Hóa Đơn</h1>
                    <div className=''>
                        <Link to='/HoaDon'>
                            <button className='btn btn-warning mr-2 text-white'><i class="fa fa-reply"></i><span className='ml-2'>Quay về</span></button>
                        </Link>
                        <button onClick={this.handleSubmit} className='btn btn-success'><i class="fa fa-check"></i><span className='ml-2'>Lưu</span></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phòng *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                {/* <input onChange={this.handleChangeInput} className='form-control' name="maphong" value={maphong} typeInput='number' type="text"></input> */}
                                <select onChange={(e) => this.handleChangeInput(e, 'maphong')} className='form-control' name="maphong">
                                    <option value={maphong}>-- Vui lòng chọn loại phòng --</option>
                                    {this.state.mangPhong.map((phong, index) => {
                                        return <option key={index} id={`form-hoa-don-phong-${phong.maphong}`} value={phong.maphong} giaphong={phong.giaphong}>
                                            {phong.tenphong}
                                        </option>
                                    })}
                                </select>
                                <p className='text-danger'>{this.props.HoaDon.errors.maphong}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tên Phiếu thu*</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input onChange={(e) => this.handleChangeInput(e, '')} name="tenphieuthu" value={tenphieuthu} className='form-control' type="text" name="tenphieuthu" value={tenphieuthu}></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.tenphieuthu}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tháng thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                {/* <input name="thangthanhtoan" value={thangthanhtoan} onChange={this.handleChangeInput} placeholder="Chọn 1 tới 12" min='1' max='12' className='form-control' type="number"></input> */}
                                <select className='form-control' value={thangthanhtoan} onChange={this.handleChangeInput} name='thangthanhtoan'>
                                    <option value='1'>Tháng 1</option>
                                    <option value='2'>Tháng 2</option>
                                    <option value='3'>Tháng 3</option>
                                    <option value='4'>Tháng 4</option>
                                    <option value='5'>Tháng 5</option>
                                    <option value='6'>Tháng 6</option>
                                    <option value='7'>Tháng 7</option>
                                    <option value='8'>Tháng 8</option>
                                    <option value='9'>Tháng 9</option>
                                    <option value='10'>Tháng 10</option>
                                    <option value='11'>Tháng 11</option>
                                    <option value='12'>Tháng 12</option>
                                </select>
                                <p className='text-danger'>{this.props.HoaDon.errors.thangthanhtoan}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Ngày lập *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input name="ngaylap" value={ngaylap} onChange={this.handleChangeInput} className='form-control' type="date" max={moment().format('YYYY-MM-DD')}></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.ngaylap}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Giá Phòng </p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input name="giaphong" value={this.state.giaphong} disabled className='form-control' ></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phí phát sinh *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input name="phiphatsinh" value={phiphatsinh} onChange={this.handleChangeInput} className='form-control' typeInput="number" type="text"></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.phiphatsinh}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tổng tiền *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input name="thanhtien" value={thanhtien} onChange={this.handleChangeInput} className='form-control' typeInput="number" type="text"></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.thanhtien}</p>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tình Trạng phí *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                {/* <input onChange={this.handleChangeInput} className='form-control' type="text" name="tinhtrangphi" value={tinhtrangphi}></input> */}
                                <select onChange={this.handleChangeInput} className='form-control' name="tinhtrangphi" value={tinhtrangphi}>
                                    <option >--- Chọn tình trạng hóa đơn ---- </option>
                                    <option value='true'>Đã Thanh toán</option>
                                    <option value='false'>Chưa thanh toán</option>
                                </select>
                                <p className='text-danger'>{this.props.HoaDon.errors.tinhtrangphi}</p>

                            </div>
                        </div>

                    </div>
                    {/* <table className='table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tên dịch vụ</th>
                                <th>Giá dịch vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.mangDichVu.map((dichvu, index) => {
                                return <tr key={index}>
                                    <td></td>
                                    <td>{dichvu.tendichvu}</td>
                                    <td>{dichvu.giadichvu}</td>
                                </tr>
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Tổng tiền: </td>
                            </tr>
                        </tfoot>
                    </table> */}
                </div>
                <Table
                    rowSelection={{
                        type: 'checkbox',
                        ...this.rowSelection,
                    }}
                    columns={this.columns}
                    dataSource={this.props.mangDichVu}
                    footer={this.renderTotal}
                ></Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangDichVu: state.DichVuReducer.mangDichVu,
        HoaDon: state.HoaDonReducer.HoaDon
    }
}

export default connect(mapStateToProps)(FormHoaDon)
