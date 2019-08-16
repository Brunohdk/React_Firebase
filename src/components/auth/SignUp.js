import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions'
import {Redirect, Link} from 'react-router-dom'
import './SignUp.css'


class SignUp extends Component{

    state={
        firstName:'',
        lastName:'',
        email:'',
        password:''
    }

    handleChange = e => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.signUp(this.state)
    }

        render(){
            const {auth, authError} = this.props
            if(auth.uid)return <Redirect to='/'/>
            return(
            <div className="signup">
                <div className="form-container">
                    <span className="form-head">Sign Up</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="First Name"
                            id="firstName" onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-envelope"></i>
                            <input type="text" placeholder="Last Name"
                            id="lastName" onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-user"></i>
                            <input type="email" placeholder="Email"
                            id="email" onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Password"
                            id="password" onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <button><i className="fa fa-user"/></button>
                        </div>
                        <div className="switch-login">
                            <Link to="/">Already have an account? <span>Login</span></Link>
                        </div>
                        <div className="red-text center">{authError?<p>{alert(authError)}</p>:null}</div>
                    </form>
                </div>
            </div>
            )}
    }

    const mapDispatchToProps = dispatch => {
        return{
            signUp: newUser => dispatch(signUp(newUser))
        }
    }

    const mapStateToProps = state => {
        return{
            auth: state.firebase.auth,
            authError: state.firebase.auth.authError
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)