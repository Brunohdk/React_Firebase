import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../../store/actions/authActions'
import './SignIn.css'


class SignIn extends Component{

    state={
        email:'',
        password:''
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.auth(this.state)
    }

    render(){
        const {authError, signOut} = this.props
        return(
            <div className="signup">
                <div className="div-container">
                <span className="form-hhead">Log In</span>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="Email..."
                            id="email" onChange={this.handleChange} />
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <i className="fa fa-user"></i>
                            <input type="password" placeholder="Password..."
                            id="password" onChange={this.handleChange}/>
                            <span className="bar"></span>
                        </div>
                        <div className="input-group">
                            <button><i className="fa fa-user"/></button>
                            <div>{authError}</div>
                        </div>
                    </form>
                    </div>
                    <a href="/" onClick={signOut}>SAIR</a>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => {
    return{
        auth: (creds) => dispatch(signIn(creds)),
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)