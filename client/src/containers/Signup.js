import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      passwordRetype: null
    }

    this.updateState = this.updateState.bind(this)
    this.saveUser = this.saveUser.bind(this)
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  saveUser(event){
    event.preventDefault();
    if(!!(this.state.username && this.state.firstName && this.state.lastName && this.state.email && this.state.password))
      if(this.state.password.match(this.state.passwordRetype)){
        axios.post('/api/createUser', {
          userName: this.state.username,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password
        })
        .then(resp => {
          if(resp.data === "ERROR") console.log("Error creating user")
          else {
            localStorage.setItem('token', resp.data.token)
            this.props.updateUserInfo(
              this.state.username,
              this.state.firstName,
              this.state.lastName,
              this.state.email,
              true
            )
          }
        })
        .catch(err => console.log("POST /createUser failed", err))
      }
  }

  render() {
    return (
      <div>
        <input type="text" id="username" onChange={this.updateState} placeholder="Pick a username"/>
        <input type="text" id="firstName" onChange={this.updateState} placeholder="What's your first name?"/>
        <input type="text" id="lastName" onChange={this.updateState} placeholder="What's your last name?"/>
        <input type="text" id="email" onChange={this.updateState} placeholder="What's your email?"/>
        <input type="password" id="password" onChange={this.updateState} placeholder="Pick a password"/>
        <input type="password" id="passwordRetype" onChange={this.updateState} placeholder="Retype password"/>
        <input type="submit" onClick={this.saveUser} value="Submit"/>
      </div>
    )
  }
}

export default connect(null, {
  updateUserInfo: updateUserInfo
})(Signup)

