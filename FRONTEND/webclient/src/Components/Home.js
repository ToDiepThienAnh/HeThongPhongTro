import React, { Component } from 'react'
import FormDichVu from './DichVu/FormDichVu'
import FormKhachThue from './KhachThue/FormKhachThue'
import Menu from './Menu'
import DanhSachPhong from './Phong/DanhSachPhong'
import ServicesList from './DichVu/ServicesList'
import FormHopDong from './HopDong/FormHopDong'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div style={{ height:'100vh'}} className='col-2 bgMenu px-0'>
                        <Menu></Menu>
                    </div>
                    
                    <div style={{ overflow:'auto', height:'100vh'}} className='col-10 pr-0'>
                       
                        <div style={{ height:50, backgroundColor:'#EDEDED'}}></div>
                        {/* <ServicesList></ServicesList> */}
                        {/* <DanhSachPhong></DanhSachPhong> */}
                        {/* <FormKhachThue></FormKhachThue> */}
                        {/* <FormHopDong></FormHopDong> */}
                    </div>
                </div>
            </div>
        )
    }
}
