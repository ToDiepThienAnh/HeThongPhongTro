import Axios from 'axios'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { SET_DANHSACH_DICHVU, UPDATE_CHISO } from '../../Redux/type/type'
import { InputNumber, Table } from 'antd'
import numeral from 'numeral'
class FormPhieuChi extends Component {

    state = {
        mangKhachHang: [],
        mangPhong: [],
        mangHopDong: [],
    }
    layDanhSachHopDong = async () => {
        const layDanhSachHopDong = await Axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllHopDongThue'
        })
        if (layDanhSachHopDong) {
            this.setState({
                mangHopDong: layDanhSachHopDong.data
            })
        }
    }
    layDanhSachKhachThue = async () => {
        const layDanhSachKhachThue = await Axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllKhachHang'
        })
        if (layDanhSachKhachThue) {
            this.setState({
                mangKhachHang: layDanhSachKhachThue.data
            })
        }
    }
    layDanhSachPhong = async () => {
        const layDanhSachPhong = await Axios({
            method: 'GET',
            url: 'http://localhost:4000/getAllHopDong'
        })
        if (layDanhSachPhong) {
            this.setState({
                mangPhong: layDanhSachPhong.data
            })
        }
    }


    handleChangeInput = (event, type) => {

        let { value, name } = event.target
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ

        const newValues = { ...this.props.PhieuChi.values }

        newValues[name] = value
        //Xử lý errors 
        const newErrors = { ...this.props.PhieuChi.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? ' Không được bỏ trống !' : '';

        if (typeInput === 'number') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = ' Vui lòng nhập số dương!';
            }
        }

        this.props.dispatch({
            type: 'SET_PHIEUCHI',
            PhieuChi: {
                errors: newErrors,
                values: newValues
            }
        })



    }
    layDanhSachDichVu = () => {
        Axios.get('http://localhost:4000/getALlDichVu').then(res => this.props.dispatch({
            type: SET_DANHSACH_DICHVU,
            data: res.data
        })).catch(err => { console.log(err); })
    }
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


    onChangeChiso = (value, index) => {
        this.props.dispatch({
            type: UPDATE_CHISO,
            data: {
                index, value
            }
        })

        let newValue = { ... this.props.PhieuChi.values }
        newValue.tienchi = this.caculate()
        this.props.dispatch({
            type: 'SET_PHIEUCHI',
            PhieuChi: {
                values: newValue
            }
        })

    }

    caculate = () => {
        const total = this.props.mangDichVu.reduce((accumulator, currentValue) => {
            // console.log("FormHoaDon -> renderTotal -> currentValue", currentValue)
            // console.log("FormHoaDon -> renderTotal -> accumulator", accumulator)
            return accumulator + (+currentValue.tongtiendichvu)
        }, 0)



        return total


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


    themPhieuChi = async (maphong, tienchi, ngaylap, makhachhang) => {
        const themPhieuChi = await Axios({
            method: 'POST',
            url: 'http://localhost:4000/themPhieuChi',
            data: { ...this.props.PhieuChi.values }
        })
    }
    handleSubmit = () => {

        let { maphong, tienchi, ngaylap, makhachhang } = this.props.PhieuChi.values
        for (const i of this.state.mangHopDong) {
            if (i.maphong === parseInt(maphong)) {
                console.log(new Date(i.ngayhethan).getTime());
                console.log(new Date(ngaylap).getTime());
                if (new Date(i.ngayhethan).getTime() < new Date(ngaylap).getTime()) {
                    // tienchi = this.renderTienCoc() - tienchi
                    // console.log("tiền chi", tienchi);
                    // console.log('tiền chi', tienchi);
                } else {
                    tienchi = this.renderTienCoc(maphong) - tienchi
                    console.log("tiền chi ", tienchi);
                    alert('phải chi ', tienchi)
                }
            }
        }


        // if (this.themPhieuChi(maphong, tienchi, ngaylap, makhachhang)) {
        //     alert('Thêm thành công')
        // }

    }

    renderTienCoc = (maPhong) => {
        for (const i of this.state.mangHopDong) {
            if (i.maphong === parseInt(maPhong)) {

                return i.tiencoc;
            }
        }
    }

    componentDidMount() {
        this.layDanhSachKhachThue();
        this.layDanhSachPhong();
        this.layDanhSachDichVu();
        this.layDanhSachHopDong()
    }

    render() {
        console.log("Phieu Chi", this.props.PhieuChi.values);
        // console.log("mang dich vu", this.props.mangDichVu);
        console.log('mảng hợp đồng', this.state.mangHopDong);
        let { maphong, makhachhang, ngaylap, tienchi } = this.props.PhieuChi.values
        return (
            <div>
                <div className='d-flex justify-content-between p-2 border-bottom mb-2'>
                    <h1 className='text-secondary'>Thêm phiếu trả phòng</h1>
                    <div>
                        <button type='submit' onClick={this.handleSubmit} className='btn btn-success mr-2'><i className="fa fa-check mr-2"></i><span>Lưu</span></button>

                        <Link to='/PhieuChi'>
                            <button className='btn btn-warning mr-2 text-white'><i class="fa fa-reply"></i><span className='ml-2'>Quay về</span></button>
                        </Link>
                    </div>
                </div>
                <div className='row mt-4 pr-2'>
                    <div className='col-6 d-flex justify-content-between'>
                        <p>Phòng</p>
                        <select className='form-control w-75' name='maphong' value={maphong} onChange={this.handleChangeInput}>
                            <option>-- Vui lòng chọn phòng ---</option>
                            {this.state.mangPhong.map((phong, index) => {
                                return <option value={phong.maphong} key={index}>
                                    {phong.tenphong}
                                </option>
                            })}
                        </select>
                    </div>
                    <div className='col-6 d-flex justify-content-between'>
                        <p>Ngày lập</p>
                        <input type='date' onChange={this.handleChangeInput} max={moment().format('YYYY-MM-DD')} name='ngaylap' value={ngaylap} className='form-control w-75'></input>
                    </div>
                    <div className='col-6 mt-4 d-flex justify-content-between'>
                        <p>Người Nhận</p>
                        <select className='form-control w-75' name='makhachhang' value={makhachhang} onChange={this.handleChangeInput}>
                            <option>-- Vui lòng chọn tên người nhận ---</option>
                            {this.state.mangHopDong.map((khachhang, index) => {
                                return <option value={khachhang.makhachhang} key={index}>
                                    {khachhang.hoten}
                                </option>
                            })}
                        </select>
                    </div>
                    <div className='col-6 mt-4 d-flex justify-content-between'>
                        <p>Số Tiền</p>
                        <div className='w-75'>
                            <input typeInput='number' name='tienchi' disabled value={tienchi + this.caculate()} onChange={this.handleChangeInput} className='form-control w-100'></input>
                        </div>
                    </div>
                    <div className='col-6 mt-4 d-flex justify-content-between'>
                        <p>Tiền Cọc</p>
                        <div className='w-75'>
                            <input className='form-control' disabled value={this.renderTienCoc(maphong)}></input>
                        </div>
                    </div>
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
        PhieuChi: state.PhieuChiReducer.PhieuChi,
        mangDichVu: state.DichVuReducer.mangDichVu
    }
}

export default connect(mapStateToProps)(FormPhieuChi)