import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        const { list, getMoerList, page } = this.props;
        return (
            <div>
                {
                    list.map((item, index)=>(
                            <Link key={index} to={'/detail/'+ item.get('id')}>
                            <ListItem >
                                <img alt="" className="pic" src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3>{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={()=>{getMoerList(page)}}>阅读更多</LoadMore>
            </div>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(["home", "articleList"]),
    page: state.getIn(["home", "articlePage"])
});

const mapDispatch = (dispatch)=>({
    getMoerList(page) {
        dispatch(actionCreators.getMoreList(page))
    }
});

export default connect(mapState, mapDispatch)(List);