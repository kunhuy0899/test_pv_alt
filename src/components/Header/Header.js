import React, { Component } from 'react'
import logo from './logotest.JPG'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <nav>
               <div className="menu">
                    <i className='bx bx-menu icon' ></i>
                </div> 
                <div className="logo">
                    <img src={logo} />
                </div>
            </nav>
        )
    }
}
