import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore, BaseLine } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { list, getMoreList, start, showLoadMore } = this.props;
        return (
            <div>
                {
                    list.map((item, index)=>(
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                            <ListItem >
                                <img alt="" className="pic" src={item.get('image')} />
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p className="desc">{item.get('description')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                {showLoadMore ? <LoadMore onClick={()=>{getMoreList(start)}}>阅读更多</LoadMore> : <BaseLine><span>我是有底线的</span></BaseLine>}
            </div>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(["home", "articleList"]),
    start: state.getIn(["home", "articleListLength"]),
    showLoadMore: state.getIn(["home", "showLoadMore"])
});

const mapDispatch = (dispatch)=>({
    getMoreList(start) {
        dispatch(actionCreators.getMoreList(start))
    }
});

export default connect(mapState, mapDispatch)(List);