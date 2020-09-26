import React from 'react';

class SearchBar extends React.Component {

    state = { query: '' };

    render() {
        return (
            <div className='ui segment searchBar'>
                <form onSubmit={this.formSubmit} className='ui form'>
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input type="text" name="search" onChange={(e) => this.setState({ query: e.target.value })} value={this.state.query} />
                    </div>
                </form>
            </div>
        );
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.query);
    }

}

export default SearchBar;