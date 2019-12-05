import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'

const changeArticleList = result=>({
    type: constants.INIT_ARTICLE_LIST,
    articleList: result.rows,
    totalArticleCount: result.count,
    showLoadMore: result.showLoadMore,
    related_user: result.related_user
})
export const getArticleList = (keyword)=> {
    return dispatch=>{
        if(!keyword){
            return;
        }
        axios.get('/v1/article/search?keywords='+keyword).then(res=>{
            const result = res.data.article_data;
            result.related_user = res.data.related_user_data;
            if(result.rows.length === result.count){
                result.showLoadMore = false;
            }else{
                result.showLoadMore = true;
            }
            dispatch(changeArticleList(result))
        })
    }
}

export const getMoreList = (start, keyword)=>{
    return (dispatch)=>{
        axios.get('/v1/article/search?count=10&start='+start + '&keywords=' + keyword).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result, start));
        });
    }
}

const addHomeList = (result, start)=>({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(result.rows),
    start,
    totalArticleCount: result.count
});