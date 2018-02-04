import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
  state = {
    query:'',
    books: []

  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  onChangeStatus = (book, shelf) => {
    let newBook = book
    newBook.shelf = shelf
    this.setState({
      books: (this.state.books.filter((b) => b.id !== newBook.id).concat(newBook))
    })
    BooksAPI.update(newBook, shelf)
  }



  render() {
    return (
      <div className="app">

       
        <Route exact path='/' render={() => (
          <BookShelf
            books={this.state.books}
            onChange={this.onChangeStatus}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchPage
            books={this.state.books}
            onChange={(book, shelf) => {
              this.onChangeStatus(book, shelf)
              //history.push('/')
            }}
          />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
