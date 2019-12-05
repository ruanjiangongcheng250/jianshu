import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchWraper, SearchLeft, SearchRight } from './style'
import { actionCreators } from './store'
import List from './components/List' 
import SearchHistory from './components/SearchHistory'
import RelatedUser from './components/RelatedUser'

class Search extends Component {
    
    componentDidMount() {
        const { keyword, getArticleList } = this.props;
        getArticleList(keyword);
    }

    componentDidUpdate(){
        const { keyword, getArticleList } = this.props;
        getArticleList(keyword);
    }

    render() {
        return <SearchWraper>
            <SearchLeft>
                <SearchHistory keyword={this.props.keyword} />
            </SearchLeft>
            <SearchRight>
                <RelatedUser />
                <List />
            </SearchRight>
        </SearchWraper>
    }

}

const mapState = (state)=>({
    keyword: state.getIn(["header", "keyword"])
});

const mapDispatch = (dispatch)=>({
    getArticleList(keyword) {
        dispatch(actionCreators.getArticleList(keyword))
    },
});

export default connect(mapState, mapDispatch)(Search);