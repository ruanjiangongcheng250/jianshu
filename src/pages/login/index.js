import React, { Component } from 'react';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store'

class Login extends Component {
    render() {
        const { loginStatus } = this.props;
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" innerRef={(input)=>{this.account = input}}/>
                        <Input placeholder="密码" innerRef={(input)=>{this.password = input}} type="password"/>
                        <Button onClick={()=>{this.props.login(this.account, this.password)}}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/" />
        }
    }

}

const mapState = (state)=>({
    loginStatus: state.getIn(["login", "login"])
});

const mapDispatch = (dispatch)=>({
    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
    }
});

export default connect(mapState, mapDispatch)(Login);