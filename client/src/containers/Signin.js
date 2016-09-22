import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions/index.js'
import { bindActionCreators } from 'redux'

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }

    this.updateState = this.updateState.bind(this)
    this.signin = this.signin.bind(this)
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  signin(event) {
    event.preventDefault()
    axios.post('/api/signin', {
      username: this.state.username,
      password: this.state.password
    })
    .then(resp => {
      if(resp.data === "ERROR") console.log("Error logging in")
      else {
        localStorage.setItem('token', resp.data.token)
        this.props.updateUserInfo(
              resp.data.username,
              resp.data.firstName,
              resp.data.lastName,
              resp.data.email
        )
      }
    })
    .catch(err => console.log("POST /signin failed: ", err))
  }

  render() {
    return (
      <div>
        <input type="text" id="username" onChange={this.updateState} placeholder="Input username"/>
        <input type="password" id="password" onChange={this.updateState} placeholder="Input password"/>
        <input type="submit" onClick={this.signin}/>
      </div>
    )
  }
}

export default connect(null, {
  updateUserInfo: updateUserInfo
})(Signin)