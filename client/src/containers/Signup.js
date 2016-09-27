import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { createUser } from '../actions/User.js'

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.userInfo = {username: '', firstName: '', lastName: '', email: '', password: '', passwordRetype: ''}
    this.getUserInfo = this.getUserInfo.bind(this)
    this.saveUser = this.saveUser.bind(this)
  }

  getUserInfo(event) {
    this.userInfo[event.target.id] = event.target.value
  }

  saveUser(event){
    event.preventDefault();
    if(!!(this.userInfo.username && this.userInfo.firstName && this.userInfo.lastName && this.userInfo.email && this.userInfo.password)){
      if(this.userInfo.password.match(this.userInfo.passwordRetype)) {
        this.props.createUser(this.userInfo.username, this.userInfo.firstName, this.userInfo.lastName,
          this.userInfo.email, this.userInfo.password)
      }
      else
        alert("Passwords don't match!")
    }
    else
      alert("Please fill out all fields")
  }

  render() {
    return (
      <div>
        <input type="text" id="username" onChange={this.getUserInfo} placeholder="Pick a username"/>
        <input type="text" id="firstName" onChange={this.getUserInfo} placeholder="What's your first name?"/>
        <input type="text" id="lastName" onChange={this.getUserInfo} placeholder="What's your last name?"/>
        <input type="text" id="email" onChange={this.getUserInfo} placeholder="What's your email?"/>
        <input type="password" id="password" onChange={this.getUserInfo} placeholder="Pick a password"/>
        <input type="password" id="passwordRetype" onChange={this.getUserInfo} placeholder="Retype password"/>
        <input type="submit" onClick={this.saveUser} value="Submit"/>
      </div>
    )
  }
}

export default connect(null, { createUser })(Signup)

