import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios';
import moment from 'moment'



class PhieuChi extends Component {


    layDanhSachPhieuChi = async () => {
        const layDanhSachPhieuChi = await axios({
            method: 'GET',
            url: "http://localhost:4000/getAllPhieuChi"
        })
        if (layDanhSachPhieuChi) {
            this.props.dispatch({
                type: 'SET_DANHSACH_PHIEUCHI',
                data: layDanhSachPhieuChi.data
            })
        }
    }

    componentDidMount() {
        this.layDanhSachPhieuChi()
    }


    render() {
        console.log("mảng phiếu chi", this.props.mangPhieuChi);
        return (
            <div className='bg-light'>
                <h1>Danh Sách Phiếu Chi</h1>
                <div className='mb-3 d-flex justify-content-between'>
                    {/* <Link to='/HoaDon/HoaDonDaThanhToan'>
                        <button className='btn btn-primary '>Danh sách hóa đơn đã thanh toán</button>
                    </Link> */}
                    <Link to={'/PhieuChi/themPhieuChi'}>
                        <button className='btn btn-success '>Thêm Phiếu Chi</button>
                    </Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Số Phòng</th>
                            <th>Ngày Lập</th>
                            <th>Người Nhận</th>
                            <th>Số tiền chi</th>
                            <th></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.mangPhieuChi.map((phieuchi, index) => {
                            return <tr key={index}>
                                <td>{phieuchi.maphong}</td>
                                <td>{(moment(phieuchi.ngaylap).format("DD/MM/YYYY"))}</td>
                                <td>{phieuchi.hoten}</td>
                                <td>{phieuchi.tienchi} VNĐ</td>

                                {/* <td>

                                    <button className='btn btn-info'>
                                        <i className="fa fa-check"></i>
                                    </button>
                                </td> */}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangPhieuChi: state.PhieuChiReducer.mangPhieuChi
    }
}

export default connect(mapStateToProps)(PhieuChi)