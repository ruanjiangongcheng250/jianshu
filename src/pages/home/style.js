import styled from 'styled-components';

export const HomeWraper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 60px;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    line-height: 32px;
    height: 32px;
    color: #000;
    padding-right: 10px;
    margin-bottom: 18px;
    font-size: 14px;
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }

`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-weight: bold;
        color: #333;
        font-size: 18px;
    }
    .desc {
        color: #999;
        font-size: 13px;
        line-height: 24px;
    }
`;

export const RecommendWrapper = styled.div`
    margin-bottom: 30px;
    margin-top: 26px;
    width: 280px
`;

export const RecommendItem = styled.div`
    margin-bottom: 6px;
    width: 280px;
    height: 50px;
    background: url(${(props)=>props.imgUrl});
    background-size: contain;
`;
export const WriterWrapper = styled.div`
    width: 278px;
    border-radius: 3px;
    height: 300px;
`;

export const WriterHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
`;

export const WriterFooter = styled.div`
    padding: 7px 7px 7px 12px;
    left: 0;
    width: 100%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    text-align: center;
    margin-top: 20px;
    height: 35px;
    box-sizing: border-box;
    line-height: 19px;
    cursor: pointer;
`;

export const WriterTitle = styled.div`

`;

export const WriterChangePage = styled.div`
    cursor: pointer;
    .spin {
        display: inline-block;
        font-size: 12px;
        margin-right: 2px;
        transition: all .5s ease;
        transform-origin: center center;
    }
`;

export const WriterItem = styled.div`
    width: 280px;
    height: 47px;
    margin-top: 15px;
    .pic {
        width: 48px;
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 24px;
        float: left;
        margin-right: 10px;
    }
    writerItemRight {
        float: left;
    }
    .follow {
        cursor: pointer;
        float: right;
        padding-top: 5px;
        font-size: 13px;
        color: #42c02e;
        line-height: 20px;
    }
    .authorName {
        float: left;
        padding-top: 5px;
        line-height: 20px;
    }
    .statistics {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #a5a5a5;
    border-radius: 20px;
    color: #fff;
    margin: 30px auto;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    right: 30px;;
    bottom: 30px;
    font-size: 12px;
    cursor: pointer;
`;

export const DownloadWrapper = styled.div`
    .smallImg {
        display: block;
        width: 60px;
        height: 60px;
    }
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 280px;
    height: 82px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
`;

export const DownloadInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
`;

export const DownloadTitle = styled.div`
    font-size: 15px;
    color: #333;
`;

export const DownloadDesc = styled.div`
    margin-top: 4px;
    font-size: 13px;
    color: #999;
`;

export const BigImg = styled.div`
    img {
        width: 100%;
        height:100%;
    }
    margin-top: -150px;
    width: 184px;
    box-sizing: border-box;
    height: 184px;
    padding: 10px;
    background: #fff;
    position: absolute;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
`;


export const BaseLine = styled.div`
    text-align: center;
    color: #999;
    margin: 20px;
    span {
        position: relative;
        &:before {
            content: '......';
            top: -6px;
            position: absolute;
            left: -30px;
        }
        &:after {
            content: '......';
            top: -6px;
            position: absolute;
            right: -30px;
        }
    }
`;