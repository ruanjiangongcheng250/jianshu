import { fromJS } from 'immutable';
import * as constants from './constants';
const defaultState = fromJS({
    showLoadMore: true,
    articleListLength: 10,
    articleList: [],
    relatedUser: [],
    relatedUserCount: 0
});


const initArticleList = (state, action)=>{
    return state.merge({
        articleList: fromJS(action.articleList),
        totalArticleCount: fromJS(action.totalArticleCount),
        showLoadMore: fromJS(action.showLoadMore),
        relatedUser: fromJS(action.related_user.rows),
        relatedUserCount: fromJS(action.related_user.count)
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
        case constants.INIT_ARTICLE_LIST:
            return initArticleList(state, action);
        case constants.ADD_ARTICLE_LIST:
            return addArticleList(state, action);
        default:
            return state;
    }
}