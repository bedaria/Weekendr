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
      password: null,
      error: null
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

  signin() {
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
        //redirect to '/'
        this.props.updateUserInfo(
              resp.data.username,
              resp.data.firstName,
              resp.data.lastName,
              resp.data.email
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
      <form>
        <input type="text" id="username" placeholder="Input username" onChange={this.updateState}/>
        <input type="password" id="password" placeholder="Input password" onChange={this.updateState}/>
        <input type="submit" onClick={this.signin}/>
        <a href="/signin/facebook"> Facebook </a>
        {this.showErrorMessage()}
      </form>
    )
  }
}

export default connect(null, {
  updateUserInfo: updateUserInfo
})(Signin)