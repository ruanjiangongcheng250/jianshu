import React, { Component } from 'react';
import{ RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux';
import banner1 from '../../../statics/banner-1.png';
import banner2 from '../../../statics/banner-2.png';
import banner3 from '../../../statics/banner-3.png';
import banner4 from '../../../statics/banner-4.png';

class Recommend extends Component {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item, index)=>{
                        if(index === 0){
                            return <RecommendItem key={item.get('id')} imgUrl={banner1}/>              
                        }else if(index === 1){
                            return <RecommendItem key={item.get('id')} imgUrl={banner2}/>              
                        }else if(index === 2){
                            return <RecommendItem key={item.get('id')} imgUrl={banner3}/>              
                        }else if(index === 3){
                            return <RecommendItem key={item.get('id')} imgUrl={banner4}/>              
                        }
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapState = (state)=>({
    list: state.getIn(["home", "recommendList"])
})

export default connect(mapState, null)(Recommend);