import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'; 
import { actionCreators as loginActionCreators } from '../../pages/login/store'; 
import { Link } from 'react-router-dom';
import { 
    HeaderWraper, 
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition, 
    Button,
    SearchWraper,
    SeachInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SerachInfoItem
} from './style';
class Header extends Component{
    render (){
        const { focused, handleInputBlur, handleInputFocus, list, login, loginOut } = this.props;
        return (
            <HeaderWraper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                {login ? <NavItem onClick={loginOut} className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登录</NavItem></Link>}
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWraper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                    <NavSearch 
                        className={focused ? 'focused' : ''} 
                        onFocus={()=>{handleInputFocus(list)}}
                        onBlur ={handleInputBlur}
                    />
                    </CSSTransition>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
                    {this.getListArea()}
                </SearchWraper>
            </Nav>
            <Addition>
                <Link to="/writer">
                    <Button className="writing">
                        <i className="iconfont">&#xe62d;</i>
                        写文章
                    </Button>
                </Link>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWraper>
        )
    }
     getListArea (){
        const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const pageList = [];
        if(list.length){
            for(let i = (page-1)*10; i < page * 10; i++){
                if(list[i]){
                    pageList.push(
                        <SerachInfoItem key={list[i]}>{list[i]}</SerachInfoItem>
                    );
                }
            }
        }
        if(focused || mouseIn){
            return (
                <SeachInfo onMouseEnter={ handleMouseEnter } onMouseLeave={ handleMouseLeave }>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ ()=>{ handleChangePage(this.spinIcon)} }>
                        <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SeachInfo>
            )
        }else{
            return null;
        }
    }
}

const mapStateToProps = (state)=>({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(["login", "login"])
    //focused: state.get('header').get('focused')
})

const mapDispatchToProps = (dispatch)=>({
    handleInputFocus(list) {
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
        dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
        dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(spin) {
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle){
            originAngle = parseInt(originAngle);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
        dispatch(actionCreators.changePage());
    },
    loginOut() {
        dispatch(loginActionCreators.loginOut());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);