// Libraries
import React, { Component } from 'react'
import _ from 'lodash'

// Components
import Login from '../TaiKhoan/FormDangNhap';
import Home from '../Home';

export default class Layout extends Component {
    state = {
        userLogin: {
            userName: 'hello'
        }
    }

    render() {
        return (
            <div>
                {_.isEmpty(this.state.userLogin) ? <Login /> : <Home />}
            </div>
        )
    }
}
