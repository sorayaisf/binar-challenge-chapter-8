import React, { Component } from 'react';
import './styles/Search.css';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            display: false,
            search: '',
            category: '',
            updatedSearch: '',
            updatedCategory: '',
        };

        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        console.log(this.state.search);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            display: true,
            updatedSearch: this.state.search,
            updatedCategory: this.state.category,
        });
    }

    render() {
        return (
            <div className="wrap">
                <div className="search">
                    <form>
                        <h3 className="title">Search</h3>
                        <input
                            type="text"
                            className="searchTerm"
                            name="search"
                            value={this.state.search}
                            placeholder="search"
                            onChange={(e) => this.handleChange(e)}
                        />
                        <br />
                        <label>
                            <input
                                type="checkbox"
                                name="category"
                                value="username"
                                checked={this.state.category === 'username'}
                                onChange={(e) => this.handleChange(e)}
                            />
                            username
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="category"
                                value="email"
                                checked={this.state.category === 'email'}
                                onChange={(e) => this.handleChange(e)}
                            />
                            email
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="category"
                                value="experience"
                                checked={this.state.category === 'experience'}
                                onChange={(e) => this.handleChange(e)}
                            />
                            experience
                            <input
                                type="checkbox"
                                name="category"
                                value="level"
                                checked={this.state.category === 'level'}
                                onChange={(e) => this.handleChange(e)}
                            />
                            level
                        </label>
                        <br />
                        <button
                            type="button"
                            className="searchButton btn btn-warning"
                            onClick={this.handleClick}
                        >
                            Search
                        </button>
                    </form>
                </div>
                <h4>Search for:</h4>
                {this.state.display && (
                    <h5>Inputted search: {this.state.updatedSearch}</h5>
                )}
                {this.state.display && <h5>Search by: {this.state.updatedCategory}</h5>}
            </div>
        );
    }
}

export default Search;