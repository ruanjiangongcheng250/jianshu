import React, { Component } from 'react';
import { DownloadWrapper, DownloadInfo, DownloadTitle, DownloadDesc, BigImg } from '../style';
import wechatImg from '../../../statics/wechat.png'
class Download extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowBigImg: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    showBigImg() {
        if(this.state.isShowBigImg){
            return <BigImg><img alt="" src={wechatImg} /></BigImg>
        }else{
            return null;
        }
    }

    handleMouseEnter() {
        this.setState(()=>({
            isShowBigImg: true
        }));
    }

    handleMouseLeave() {
        this.setState(()=>({
            isShowBigImg: false
        }));
    }

    render() {
        return (
            <DownloadWrapper onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <img className="smallImg" alt="" src={wechatImg} />
                <DownloadInfo>
                    <DownloadTitle>
                        下载简书手机App
                    </DownloadTitle>
                    <DownloadDesc>随时随地发现和创作内容</DownloadDesc>
                </DownloadInfo>
                {this.showBigImg()}
            </DownloadWrapper>
        )
    }
}

export default Download;