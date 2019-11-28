import React, { Component } from 'react';
import { HomeWraper, HomeLeft, HomeRight, BackTop } from './style';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWraper>
                <HomeLeft>
                    <img alt="" className="nanner-img" src="//upload.jianshu.io/admin_banners/web_images/4516/cd9298634ca88ca71fc12752acf47917967a5d31.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Download />
                    <Writer />
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWraper>
        )
    }

    componentDidMount() {
        this.props.getArticleList();
        this.props.getTopicList();
        this.props.getWriterList(); //获取推荐作者列表
       // this.props.changeHomeData();
        this.bindEvent();
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }

};

const mapState = (state)=>({
    showScroll: state.getIn(["home", "showScroll"])
})

const mapDispatch = (dispatch)=>({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    getArticleList() {
        dispatch(actionCreators.getArticleList())
    },
    getTopicList() {
        dispatch(actionCreators.getTopicList())
    },
    getWriterList() {
        dispatch(actionCreators.getWriterList())
    },
    changeScrollTopShow(e) {
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    }
});

export default connect(mapState, mapDispatch)(Home);