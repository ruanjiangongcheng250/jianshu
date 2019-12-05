import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWraper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    right: 0;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
`;

export const Logo = styled.div`
    display: block;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    height: 100%;
    padding-right: 70px;
    border-box: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        font-size: 15px;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    border: none;
    border-radius: 19px;
    margin-top: 9px;
    box-sizing: border-box;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999
    }
    &.focused {
        width: 240px;
        outline:none;
    }
    &.slide-enter {
        transition: all .2s ease-out
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size： 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWraper = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        border-radius: 15px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        &.focused {
            background: #777;
            color: white;
            outline:none;
        }
    }
`;

export const SeachInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: white;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    font-size: 14px;
    color: #969696;
    line-height: 20px;
`;

export const SearchInfoSwitch = styled.span`
    font-size: 13px;
    float: right;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SerachInfoItem = styled.a`
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 0 5px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    line-height: 20px;
    display: block;
    float: left;
    cursor: pointer;
`;