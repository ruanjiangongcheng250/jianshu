import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [{
			"id": 2,
			"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png"
		}, {
			"id": 3,
			"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
		}, {
			"id": 4,
			"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
		},
		{
			"id": 5,
			"imgUrl": "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
		}],
    writerList: [],
    articleListLength: 10,
    showScroll: false,
    writerPage: 1,
    writerTotalPage: 1,
    totalArticleCount: 0,
    showLoadMore: true
});

const changeHomeData = (state, action)=>{
    return state.merge({
        topicList: fromJS(action.topicList),
        recommendList: fromJS(action.recommendList),
        articleList: fromJS(action.articleList),
        writerList: fromJS(action.writerList),
        writerTotalPage: Math.ceil(action.writerList.length/5)
    })
};

const initArticleList = (state, action)=>{
    return state.merge({
        articleList: fromJS(action.articleList),
        totalArticleCount: fromJS(action.totalArticleCount),
        showLoadMore: fromJS(action.showLoadMore)
    })
}

const addArticleList = (state, action)=>{
    let showLoadMore = true;
    const articleListLength = state.get('articleList').size + action.list.size
    const count = action.totalArticleCount;
    if(count === articleListLength){
        showLoadMore = false;
    }
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articleListLength,
        showLoadMore
    })
}

export default  (state = defaultState, action)=>{
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case constants.INIT_ARTICLE_LIST:
            return initArticleList(state, action);
        case constants.GET_TOPIC_LIST:
            return state.merge({
                topicList: action.topicList
            })
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        case constants.TOGGLE_SCROLL_TOP:
            return state.set("showScroll", action.show);
        case constants.CHANGE_WRITER_LIST:
            return state.set('writerPage', action.nextPage);
        case constants.GET_WRITER_LIST:
            return state.merge({
                writerList: action.writerList
            })
        default:
            return state; 
    }
}