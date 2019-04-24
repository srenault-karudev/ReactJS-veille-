import React from 'react'

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            searchCount: 0,
            resultCount: 0,
            toalCount : 0
        };
    }

    changeSearchText(event) {
        var v = event.target.value;
        this.setState((prevState, props) => {
            return {
                searchText: v
            };
        });
    }

    doSearch() {
        this.setState( (prevState, props) => {
            var count = this.state.searchText.length * 3;
            return {
                searchCount: prevState.searchCount + 1,
                resultCount: count
            };
        });
    }

    totalCount(){
        var total = this.state.searchCount + this.state.resultCount;
        this.setState((prevState,props) =>{
            return{
                toalCount: total
            }
        });
    }

    render() {
        return (
            <div className='search-box'>
                <input
                    type="text"
                    value={this.state   .searchText}
                    onChange={this.changeSearchText.bind(this)}
                />
                <button onClick={this.doSearch.bind(this)}>Search</button>
                <button onClick={this.totalCount.bind(this)}>Calcul</button>
                <div>Search Text: {this.state.searchText}</div>
                <div>Search Count: {this.state.searchCount}</div>
                <div>Result Count: {this.state.resultCount}</div>
                <div>Total Count: {this.state.toalCount}</div>


            </div>
        );
    }
}
export default Search