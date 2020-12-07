import React, { Component } from 'react'
import Menu from './Menu'
import DanhSachPhong from './Phong/DanhSachPhong'
import ServicesList from './ServicesList'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 bgMenu px-0'>
                        <Menu></Menu>
                    </div>
                    <div className='col-10 pr-0'>
                       
                        <div style={{ height:50, backgroundColor:'#EDEDED'}}></div>
                        {/* <ServicesList></ServicesList> */}
                        <DanhSachPhong></DanhSachPhong>
                    </div>
                </div>
            </div>
        )
    }
}
