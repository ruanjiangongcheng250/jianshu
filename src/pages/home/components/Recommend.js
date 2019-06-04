import React, { Component } from 'react';
import{ RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux';
import banner1 from '../../../statics/banner-1.png';
import banner2 from '../../../statics/banner-2.png';
import banner3 from '../../../statics/banner-2.png';

class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item, index)=>(
                        index === 0 || index === 2 ? <RecommendItem key={item.get('id')} imgUrl={banner1}/> : <RecommendItem key={item.get('id')} imgUrl={banner2}/>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(["home", "recommendList"])
})

export default connect(mapState, null)(Recommend);