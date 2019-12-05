import styled from 'styled-components';

export const SearchWraper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
`;

export const SearchLeft = styled.div`
    width: 280px;
    float: left;
    padding-left: 15px;
    margin-top: 60px;
`;

export const SearchRight = styled.div`
    width: 625px;
    float: right;
    margin-top: 60px;
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


export const NoData = styled.div`
    display: flex;
    align-items: center;
    margin-top: 150px;
    flex-direction: column;
    img {
        width: 100px;
        height: 87px;
    }
    p {
        margin-top: 20px;
        font-size: 14px;
        font-weight: 700;
    }
`;

export const SearchList = styled.div`
    .title {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        color: #969696;
        .titleLeft {
            font-size: 14px;
        }

        .titleRight {
            font-size: 13px;
            cursor: pointer;
        }
    }
    .list {
        padding: 0 15px;
        .item {
            display: flex;
            justify-content: space-between;
            padding:0 10px;
            height: 40px;
            line-height: 40px;
            cursor: pointer;
            &.active {
                background-color: #eee;
                border-radius: 5px;
            }
        }
    }
`;


export const RelatedUserWrap = styled.div`
    margin-bottom: 30px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    padding: 20px 0;
    .title {
        display: flex;
        justify-content: space-between;
        .left {
            margin-left: 18px;
            color: #333;
        }
        .right {
            margin-right: 18px;
            color: #3194d0;
            cursor: pointer;
        }
    }

    .userContent {
        display: flex;
        padding: 0 10px;
        a {
            width: 33%;
            li {
                display: flex;
                img {
                    width: 48px;
                    height: 48px;
                    border-radius: 48px;
                    
                }
                .info {
                    margin-left: 10px;
                    p {
                        margin-bottom: 0;
                        &.name {
                            margin-top: 3px;
                            font-size: 15px;
                            font-weight: 700;
                            color: #333;
                        }
                        &.meta {
                            margin-top: 5px;
                            font-size: 12px;
                            color: #969696;
                        }
                    }
                }
            }
        }
    }
`;


