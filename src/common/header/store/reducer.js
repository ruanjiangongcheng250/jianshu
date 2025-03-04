import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({
    focused: false,
    list: [],
    mouseIn: false,
    page: 1,
    totalPage: 1,
    keyword: ''
});

export default  (state = defaultState, action)=>{
    switch(action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANGE_LIST:
            return state.set('list', action.data).set('totalPage', action.totalPage);
        case constants.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case constants.CHANGE_PAGE:
            const nextPage = state.toJS().page + 1;
            const totalPage = state.toJS().totalPage;
            if(nextPage -1 < totalPage){
                return state.set('page', nextPage);
            }else{
                return state.set('page', 1)
            }
        case constants.SEARCH_KEYWORD:
            return state.set('keyword', action.keyword)
        default:
            return state;
    }
}