import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../actions/User.js'
import { browserHistory } from 'react-router';

class Signin extends React.Component {
  constructor(props) {
    super(props)

    this.userLoginInfo = {username: '', password: ''}
    this.getLoginInfo = this.getLoginInfo.bind(this)
    this.showButton = this.showButton.bind(this)
    this.signin = this.signin.bind(this)
  }

  getLoginInfo(event) {
    this.userLoginInfo[event.target.id] = event.target.value
  }

  showButton() {
    if(localStorage.token)
      return <div> You're already logged in as {localStorage.username} </div>
    else
      return (
        <div>
          <input type="text" id="username" onChange={this.getLoginInfo} placeholder="Input username"/>
          <input type="password" id="password" onChange={this.getLoginInfo} placeholder="Input password"/>
          <input type="submit" onClick={this.signin}/>
        </div>
      )
  }

  signin(event) {
    event.preventDefault()
    this.props.login(this.userLoginInfo.username, this.userLoginInfo.password)
  }

  render() {
    return <div> {this.showButton()} </div>
  }
}

export default connect(null, { login })(Signin)