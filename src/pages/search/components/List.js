import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore, BaseLine, NoData } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import NoDataImg from '../../../statics/noData.png'

class List extends Component {
    render() {
        const { list, getMoreList, start, showLoadMore, keyword } = this.props;
        return (
            list.size ? <div>
                {
                    list.map((item, index)=>(
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                            <ListItem >
                                <img alt="" className="pic" src={item.get('image')} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('description')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                {showLoadMore ? <LoadMore onClick={()=>{getMoreList(start, keyword)}}>阅读更多</LoadMore> : <BaseLine><span>我是有底线的</span></BaseLine>}
            </div> : <NoData>
                <img alt="noDataImg" src={NoDataImg}></img>
                <p>未找到相关内容</p>
            </NoData>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(["search", "articleList"]),
    start: state.getIn(["search", "articleListLength"]),
    showLoadMore: state.getIn(["search", "showLoadMore"]),
    keyword: state.getIn(["header", "keyword"])
});

const mapDispatch = (dispatch)=>({
    getMoreList(start, keyword) {
        dispatch(actionCreators.getMoreList(start, keyword))
    }
});

export default connect(mapState, mapDispatch)(List);