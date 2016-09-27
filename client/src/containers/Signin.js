import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../actions/User.js'

class Signin extends React.Component {
  constructor(props) {
    super(props)

    this.userLoginInfo = {username: '', password: ''}
    this.getLoginInfo = this.getLoginInfo.bind(this)
    this.signin = this.signin.bind(this)
  }

  getLoginInfo(event) {
    this.userLoginInfo[event.target.id] = event.target.value
  }

  signin(event) {
    event.preventDefault()
    this.props.login(this.userLoginInfo.username, this.userLoginInfo.password)
  }

  render() {
    return (
      <div>
        <input type="text" id="username" onChange={this.getLoginInfo} placeholder="Input username"/>
        <input type="password" id="password" onChange={this.getLoginInfo} placeholder="Input password"/>
        <input type="submit" onClick={this.signin}/>
      </div>
    )
  }
}

export default connect(null, { login })(Signin)