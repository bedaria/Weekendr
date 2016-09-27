import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUserInfo } from '../actions/User.js'

class Signin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null
    }

    this.updateState = this.updateState.bind(this)
    this.signin = this.signin.bind(this)
    this.showErrorMessage = this.showErrorMessage.bind(this)
  }

  updateState(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  showErrorMessage() {
     if(this.state.error)
      return <div> {this.state.error} </div>
  }

  signin(event) {
    event.preventDefault()
    axios.post('/api/signin', {
      username: this.state.username,
      password: this.state.password
    })
    .then(resp => {
      if(resp.data.error) this.setState({error: resp.data.error})
      else {
        this.setState({error: null})
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('username', resp.data.userName)
        localStorage.setItem('firstName', resp.data.firstName)
        this.props.updateUserInfo(
              resp.data.username,
              resp.data.firstName
        )
      }
    })
    .catch(err => {
      console.log("POST /signin failed: ", err)
      this.setState({error: "Error occurred, please try again"})
    })
  }

  render() {
    return (
      <div>
        <input type="text" id="username" onChange={this.updateState} placeholder="Input username"/>
        <input type="password" id="password" onChange={this.updateState} placeholder="Input password"/>
        <input type="submit" onClick={this.signin}/>
        {this.showErrorMessages()}
      </div>
    )
  }
}

export default connect(null, {
  updateUserInfo: updateUserInfo
})(Signin)