import React, { Component } from 'react';
import { WriterWrapper } from './style';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Detail extends Component {
    render() {
        const { login } = this.props;
        if(login){
            return <WriterWrapper>写文章</WriterWrapper>
        }else{
            return <Redirect to="/login" />
        }
    }

}

const mapState = (state)=>({
    login: state.getIn(['login', 'login'])
});

const mapDispatch = (dispatch)=>({
    
})

export default connect(mapState, mapDispatch)(Detail);