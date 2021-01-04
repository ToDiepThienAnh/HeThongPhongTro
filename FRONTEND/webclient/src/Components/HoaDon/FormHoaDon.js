import { InputNumber, Table } from 'antd'
import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_DANHSACH_DICHVU, SET_HOADON, UPDATE_CHISO } from '../../Redux/type/type'
import numeral from 'numeral'
import { min } from 'moment'
class FormHoaDon extends Component {


    layDanhSachDichVu = () => {
        Axios.get('http://localhost:4000/getALlDichVu').then(res => this.props.dispatch({
            type: SET_DANHSACH_DICHVU,
            data: res.data
        })).catch(err => { console.log(err); })
    }

    componentDidMount() {
        this.layDanhSachDichVu()
    }

    onChangeChiso = (value, index) => {
        this.props.dispatch({
            type: UPDATE_CHISO,
            data: {
                index, value
            }
        })
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

    handleChangeInput = (event) => {
        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.HoaDon.values }

        newValues[name] = value
        console.log(name, value);
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


        console.log(newValues);
        this.props.dispatch({
            type: SET_HOADON,
            HoaDon: {
                values: newValues,
                errors: newErrors
            }
        })
    }

    handleSubmit = (e) => {
        let { tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi, namthanhtoan } = this.props.HoaDon.values
        this.themHoaDon(tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi, namthanhtoan);
    }

    render() {
        console.log("Hoa Don", this.props.HoaDon);
        // console.log("mảng Dịch vụ", this.props.mangDichVu);
        let { tenphieuthu, maphong, ngaylap, thangthanhtoan, phiphatsinh, thanhtien, tinhtrangphi, namthanhtoan } = this.props.HoaDon.values
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
                                <input onChange={this.handleChangeInput} className='form-control' name="maphong" value={maphong} typeInput='number' type="text"></input>
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
                                <input onChange={this.handleChangeInput} name="tenphieuthu" value={tenphieuthu} className='form-control' type="text" name="tenphieuthu" value={tenphieuthu}></input>
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
                                <input name="thangthanhtoan" value={thangthanhtoan} onChange={this.handleChangeInput} min='1' max='12' className='form-control' type="number"></input>
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
                                <input name="ngaylap" value={ngaylap} onChange={this.handleChangeInput} className='form-control' type="date"></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.ngaylap}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Năm thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input name="namthanhtoan" value={namthanhtoan} onChange={this.handleChangeInput} className='form-control' min='1' type="number"></input>
                                <p className='text-danger'>{this.props.HoaDon.errors.namthanhtoan}</p>
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
                                <p>Trạng thái phí *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input onChange={this.handleChangeInput} className='form-control' type="text" name="tinhtrangphi" value={tinhtrangphi}></input>
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
