import React, { Component } from 'react'
import Menu from './Menu'

export default class Home extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-2 bgMenu px-0'>
                        <Menu></Menu>
                    </div>
                    <div className='col-10'>

                    </div>
                </div>
            </div>
        )
    }
}
