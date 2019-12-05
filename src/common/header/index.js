import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store'; 
import { actionCreators as loginActionCreators } from '../../pages/login/store'; 
import { Link } from 'react-router-dom';
import { message } from 'antd';
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
        const { focused, handleInputBlur, handleInputFocus, list, login, loginOut, handleSaveKeyWord } = this.props;
        return (
            <HeaderWraper>
            <Link to="/">
                <Logo />
            </Link>
            <Nav>
                <Link to="/">
                    <NavItem className="left active">首页</NavItem>
                </Link>
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
                        className={focused ? 'searchInput focused' : 'searchInput'} 
                        onFocus={()=>{handleInputFocus(list)}}
                        onBlur ={handleInputBlur}
                        onKeyDown={(e)=>handleSaveKeyWord(this, null, e)}
                    />
                    </CSSTransition>
                    <i onMouseDown={()=>handleSaveKeyWord(this)} className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
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
        const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage, handleSaveKeyWord } = this.props;
        const pageList = [];
        if(list.length){
            for(let i = (page-1)*10; i < page * 10; i++){
                if(list[i]){
                    pageList.push(
                        <SerachInfoItem onClick={()=>handleSaveKeyWord(this, list[i])} key={list[i]}>{list[i]}</SerachInfoItem>
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

const SaveKeyWordToLocal = function(value){
    const keyWordList = localStorage.getItem('key_word_list');
    if(!keyWordList){
        localStorage.setItem('key_word_list', value);
    }else{
        const arr = keyWordList.split(';')
        if(!arr.includes(value)){
            arr.unshift(value);
        }
        if(arr.length > 10){
            arr.pop()
        }
        const str = arr.join(';');
        localStorage.setItem('key_word_list', str)
    }

}

const mapStateToProps = (state)=>({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(["login", "login"]),
    keyword: state.getIn(["header", "keyword"])
})

const mapDispatchToProps = (dispatch)=>({
    handleInputFocus(list) {
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(e) {
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
    },
    handleSaveKeyWord(context, keyword, event) {
        if(event && event.keyCode !== 13){
            return;
        }
        keyword = keyword || document.getElementsByClassName('searchInput')[0].value;
        if(!keyword || !keyword.trim()){
            message.warn('请输入搜索关键字');
            return;
        }
        //将搜索结果放到本地的缓存中
        SaveKeyWordToLocal(keyword)
        document.getElementsByClassName('searchInput')[0].blur()
        document.getElementsByClassName('searchInput')[0].value = '';
        dispatch(actionCreators.saveKeyWord(keyword));
        dispatch(actionCreators.mouseLeave());
        context.props.history.push('/search');
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);