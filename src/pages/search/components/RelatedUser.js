import React, {Component} from 'react';
import { connect } from 'react-redux'
import { RelatedUserWrap } from '../style'
import { Link } from 'react-router-dom';
import avator from '../../../statics/avator.png';

class RelatedUser extends Component {
    render() {
        const {relatedUserList, relatedUserCount} = this.props;
        return relatedUserList.size > 0 ? <RelatedUserWrap>
            <p className="title">
                <span className="left">相关用户</span>
                {relatedUserCount > 3 ? <span className="right">查看全部></span> : ''}
            </p>
            <ul className="userContent">
                {
                    relatedUserList.map((item)=>(
                        <Link key={item.get('id')} to={"/user/"+ item.get('id')}>
                            <li className="item">
                                <img alt="avator"  src={item.get('avator') || avator}/>
                                <div className="info">
                                    <p className="name">{item.get('name')}</p>
                                    <p className="meta">写了0字数·0喜欢</p>
                                </div>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </RelatedUserWrap> : ''
    }
}

const mapState = (state)=>({
    relatedUserList: state.getIn(["search", 'relatedUser']),
    relatedUserCount: state.getIn(["search", 'relatedUserCount'])
})

const mapDispatch = (dispatch)=>({

})

export default connect(mapState, mapDispatch)(RelatedUser);