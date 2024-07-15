import React, { Component } from 'react'
import App_guest from './App_guest'

export default class App_user extends Component {
  render() {
    return (
      <div>
        <h3>User Component</h3>
        <App_guest nm={this.props.name}/>
      </div>
    )
  }
}
