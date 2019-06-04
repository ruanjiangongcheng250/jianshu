import React, { Component } from 'react';
import { WriterWrapper, WriterItem, WriterHeader, WriterTitle, WriterChangePage, WriterFooter } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

class Writer extends Component {
    render() {
        const { list, writerPage, writerTotalPage } = this.props;
        const curList = [];
        if(list.size){
            for(var i = 5 * ( writerPage - 1 ); i< 5 * writerPage; i++){
                const item = list.toJS()[i];
                if(item){
                    curList.push(
                        <WriterItem key={item.id}>
                            <img alt="" className="pic" src={item.imgUrl}/>
                            <div className="writerItemRight">
                                <p style={{overflow: 'hidden'}}>
                                    <span className="authorName">{item.authorName}</span>
                                    <span className="follow">+关注</span>
                                </p>
                                <p className="statistics">写了32k字, 23喜欢</p>
                            </div>
                        </WriterItem>
                    );
                }
            }
        }
        return ( 
            <WriterWrapper>
                <WriterHeader>
                    <WriterTitle>推荐作者</WriterTitle>
                    <WriterChangePage onClick={()=>{this.props.handleChangePage(this.spinIcon, writerTotalPage, writerPage + 1)}}>
                        <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                        换一批
                    </WriterChangePage>
                </WriterHeader>
                {curList}
                <WriterFooter>
                    查看全部 >
                </WriterFooter>
            </WriterWrapper>
        )
    }
}
const mapState = (state)=>({
    list: state.getIn(["home", "writerList"]),
    writerPage: state.getIn(["home", "writerPage"]),
    writerTotalPage: state.getIn(["home", "writerTotalPage"])
});

const mapDispatch = (dispatch)=>({
    handleChangePage(spin, totalPage, nextPage) {
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
        if(originAngle){
            originAngle = parseInt(originAngle);
        }else{
            originAngle = 0;
        }
        spin.style.transform = 'rotate('+ (originAngle + 360) +'deg)';
        if(nextPage > totalPage){
            dispatch(actionCreators.getWriterList(1));
        }else{
            dispatch(actionCreators.getWriterList(nextPage));
        }
    }
})

export default connect(mapState, mapDispatch)(Writer);