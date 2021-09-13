import { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch({
            type: 'ADD_BOOK', book: {
                title: title,
                author: author

            }
        })
        setTitle('')
        setAuthor('')
    }


    return (
        <form onSubmit={handleSubmit} className="book-form">
            <input required value={title} type="text" placeholder="Enter Title." onChange={(e) => { setTitle(e.target.value) }} />
            <input required value={author} type="text" placeholder="Enter Author" onChange={(e) => { setAuthor(e.target.value) }} />
            <button type="submit">Add Book</button>
        </form>
    )
}

export default BookForm
