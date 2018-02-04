import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';

class SearchPage extends Component {

    state = {
        query: '',
        books: [],
        searchBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() });
        if (query.trim().length > 0) {
            this.searchBook(query);
        }

    }
    searchBook = (query) => {
        BooksAPI.search(query).then((books) => {
            if (!books || books.error) {
                this.setState({ searchBooks: [] });
            } else {
                this.setState({ searchBooks: books })
            }

        })
    }

    render() {
        if (this.state.searchBooks) {
            this.state.searchBooks.map((searchbook) => {
                searchbook.shelf='none';
                this.props.books.map((book) => {
                    if (searchbook.id === book.id) {
                        searchbook.shelf = book.shelf

                    } 
                    
                })

            })
        }


        return (


            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author" />

                    </div>
                </div>
                <div className="search-books-results">

                    <Route render={() => (
                        <BookList
                            books={this.state.searchBooks}
                            onChange={this.props.onChange}
                        />
                    )} />


                </div>
            </div>
        )
    }
}

export default SearchPage