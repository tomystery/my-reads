import React, { Component } from 'react'

class ListBookshelf extends Component {
    render() {

        console.log(this.props.book)

        return (
            <ol className="books-grid">
                {this.props.book.map((boo) => (
                    <li key={boo.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{
                                    width: 128, height: 193, backgroundImage:
                                        `url(${boo.imageLinks.thumbnail})`
                                }}></div>
                                <div className="book-shelf-changer">
                                    <select>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{boo.title}</div>
                            <div className="book-authors">{boo.authors}</div>
                        </div>
                    </li>
                ))}

            </ol>

        )
    }
}

export default ListBookshelf


