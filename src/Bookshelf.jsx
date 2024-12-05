// require the use of usestate

import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    })

//create a function that will be triggered each time a user types in an input field
const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
    // this line above targets the key
}

//create a function that manages the submision of the form
const handleSubmit = (event) => {
    //prevent the defalut from submission
    event.preventDefault();
    //setbooks based on the new book state
    setBooks([...books, newBook])
    //reset the newBook state to an empty value on the form
    setNewBook({title: '', author: ''});
}
    return (
        <>
        <div className="bookshelfDiv">
        <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
                <input 
                // key
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
                />
            <label htmlFor="author">Author: </label>
                <input 
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
                />
            <button type="submit">Submit your book</button>
        </form>
        </div>
        <div className="bookCardsDiv">{/* Book cards will display here */}
            {books.map((book, index) => (
                <div className="bookCard"
                key={index}>
                <p>{book.title}</p>
                <p>By: {book.author}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
    
        


        
  };
  
  export default Bookshelf;