import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {

    const { books } = useContext(BookContext)


    // (USE THIS IN THE FUTURE: RETURNING DIFFERENT JSX DEPENDING ON IF ARRAY IS EMPTY OR NOT USING TERINARY STATEMENT)

    return books.length ? (
        <ul className="book-list">

            {books.map(book => (
                <BookDetails key={book.id} book={book} />
            ))}

        </ul>

    ) : (
        <div className="empty"><h1>You have no books on your list.</h1> </div>
    )
}

export default BookList
