import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../App.css';
import { BasicInput } from '../../components/basicInput';
import { BasicButton } from '../../components/buttons';
import { attendanceLogin } from '../../services/index';
import { connect } from 'react-redux';
import { ReactForm } from '../../components/ReactForm';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: '',
      password: '',
      loginBody: {
        email: '',
        password: ''
      }
    }
  }
  login() {
    // const body = {
    //   email: this.state.emailId,
    //   password: this.state.password
    // }
    this.props.attendanceLogin(this.state.loginBody);
  }

  componentDidUpdate() {
    if (this.props.loginStatus === 200) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div className="align-items-center row mx-2" style={{ height: '100vh' }}>
        <div className=" col-sm mx-3 align-middle">
          <h1 className="text-center align-middle" style={{ verticalAlign: "center" }}>Attendance app</h1>
        </div>
        <div className="card rounded col-sm mx-3">
          <div className="card-body">
            <h1 className="text-center my-4">Attendance</h1>
            <h2 className="text-center my-3">Login</h2>
            <ReactForm
            onClick={(val) => {
              console.log(val);
            }}
            data={this.state.loginBody} />
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loginStatus } = state.AuthReducer
  console.log(loginStatus);
  return (
    {
      loginStatus
    }
  )
}

const mapDispatchToProps = dispatch => ({
  attendanceLogin: (body) => dispatch(attendanceLogin(body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
