import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result)=>({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList
});

const changeArticleList = result=>({
    type: constants.INIT_ARTICLE_LIST,
    articleList: result.rows,
    totalArticleCount: result.count,
    showLoadMore: result.showLoadMore
})

const addHomeList = (result, start)=>({
    type: constants.ADD_ARTICLE_LIST,
    list: fromJS(result.rows),
    start,
    totalArticleCount: result.count
});

export const getHomeInfo = ()=> {
    return (dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
}

export const getArticleList = ()=> {
    return dispatch=>{
        axios.get('/v1/article/queryAllArticle').then(res=>{
            const result = res.data.data;
            if(result.rows.length === result.count){
                result.showLoadMore = false;
            }else{
                result.showLoadMore = true;
            }
            dispatch(changeArticleList(result))
        })
    }
}

export const getMoreList = (start)=>{
    return (dispatch)=>{
        axios.get('/v1/article/queryAllArticle?count=10&start='+start).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result, start));
        });
    }
}

export const getWriterList = ()=> {
    return (dispatch)=>{
        axios.get('/v1/user/recommand').then(res=>{
            const writerList = res.data.data;
            dispatch({
                type: constants.GET_WRITER_LIST,
                writerList
            })
        })
    }
}

export const toggleTopShow = (show)=>({
    type: constants.TOGGLE_SCROLL_TOP,
    show
});

// export const getWriterList = (nextPage)=>({
//     type: constants.CHANGE_WRITER_LIST,
//     nextPage
// });

export const  getTopicList = ()=>{
    return (dispatch)=>{
        axios.get('/v1/topic/get').then(res=>{
            const result = res.data.data;
            dispatch({
                type: constants.GET_TOPIC_LIST,
                topicList: result
            })
        })
    }
}