import React, { Component } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux';
class Topic extends Component {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item)=>(
                        <TopicItem key={item.get('id')}>
                            <img alt="" className="topic-pic" src={item.get('image')} />
                            {item.get('name')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}
const mapState = (state)=>({
    list: state.getIn(["home", "topicList"])
});

export default connect(mapState, null)(Topic);