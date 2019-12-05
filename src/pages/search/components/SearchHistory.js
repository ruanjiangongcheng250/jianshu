import React, { Component } from 'react';
import { SearchList } from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../../../common/header/store'; 

const getSearchHistoryFromLocal = ()=>{
    const str = localStorage.getItem('key_word_list');
    const arr = str && str.split(';');
    return arr || []
}

class SearchHistory extends Component {
    constructor(props) {
        super(props)
        const searchHistory = getSearchHistoryFromLocal();
        this.state = {
            searchHistory
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleCleanHistory = this.handleCleanHistory.bind(this);
    }

    render() {
        const data = this.state.searchHistory;
        const { handleSaveKeyWord } = this.props;
        return data.length ? <SearchList> 
            <p className="title">
                <span className="titleLeft">最近搜索</span>
                <span onClick={this.handleCleanHistory} className="titleRight">清空</span>
            </p>
            <ul className="list">
                {
                    data.map((item, index)=>(
                        <li key={item} onClick={()=>{handleSaveKeyWord(item)}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="item">
                            <span>{item}</span>
                        </li>
                    ))
                }
            </ul>
        </SearchList> : ''
    }

    handleMouseEnter(e) {
        e.currentTarget.classList.add('active')
    }

    handleMouseLeave (e) {
        e.currentTarget.classList.remove('active')
    }

    handleCleanHistory() {
        this.setState({
            searchHistory: []
        }, ()=>{
            localStorage.removeItem('key_word_list')
        })
    }
}

const mapState = (state)=>({

})

const mapDispatch =(dispatch) =>({
    handleSaveKeyWord(keyword) {
        dispatch(actionCreators.saveKeyWord(keyword));
    }
})
export default connect(mapState, mapDispatch)(SearchHistory);