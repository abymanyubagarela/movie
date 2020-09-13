import React, { Component } from 'react'
import SearchResult from '../containers/SearchResult/SearchResult';

class SearchResultPage extends Component {
    render() {
        return (
            <SearchResult  id={this.props.match.params.id}/>
        )
    }
}

export default SearchResultPage;