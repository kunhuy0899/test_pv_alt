import React, { Component } from 'react'
import Header from './components/Header/Header'
import './App.css'
import Content from './components/content/Content'
export default class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}

