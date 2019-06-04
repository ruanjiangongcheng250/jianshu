
import * as constants from './constants';
import axios from 'axios';
import { fromJs } from 'immutable';

const changeList = (data)=>({
    type: constants.CHANGE_LIST,
    //data: fromJs(data) 讲师说是这样 但是有问题
    data,
    totalPage: Math.ceil(data.length/10)
})

export const searchFocus = ()=>({
    type: constants.SEARCH_FOCUS
});

export const searchBlur = ()=>({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = ()=>({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
    type: constants.MOUSE_LEAVE
});

export const changePage = ()=>({
    type: constants.CHANGE_PAGE
});

export const getList = ()=>(
    (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data = res.data;
            const action = changeList(data.data);
            dispatch(action);
        }).catch(()=>{
            
        })
    }
)
