import { InputNumber, Table } from 'antd'
import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_DANHSACH_DICHVU, UPDATE_CHISO } from '../../Redux/type/type'
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
                console.log("value, record, index", value, index)
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
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    renderTotal = () => {
        const { mangDichVu } = this.props
        console.log("FormHoaDon -> renderTotal -> mangDichVu", mangDichVu)
        const total = mangDichVu.reduce((accumulator, currentValue) => {
            console.log("FormHoaDon -> renderTotal -> currentValue", currentValue)
            console.log("FormHoaDon -> renderTotal -> accumulator", accumulator)
            return accumulator + (+currentValue.tongtiendichvu)
        }, 0)

        return <div>
            Tổng tiền: {numeral(total).format('0,0')} vnd
        </div>
    }

    render() {
        // console.log("mảng Dịch vụ", this.props.mangDichVu);
        return (
            <div className='container text-secondary'>
                <div className='d-flex justify-content-between'>
                    <h1 className=''>Thêm Hóa Đơn</h1>
                    <div className=''>
                        <Link to='/HoaDon'>
                            <button className='btn btn-warning mr-2 text-white'><i class="fa fa-reply"></i><span className='ml-2'>Quay về</span></button>
                        </Link>
                        <button className='btn btn-success'><i class="fa fa-check"></i><span className='ml-2'>Lưu</span></button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phòng *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Ngày lập hóa đơn*</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tháng thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Ngày lập *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Năm thanh toán *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Phí phát sinh *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Tổng tiền *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='form-control' type="text"></input>
                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <div className='form-group row px-2'>
                            <div className='col-4'>
                                <p>Trạng thái phí *</p>
                            </div>
                            <div className='col-8 pl-0'>
                                <input className='' type="checkbox" name="" value=""></input>

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
        mangDichVu: state.DichVuReducer.mangDichVu
    }
}

export default connect(mapStateToProps)(FormHoaDon)
