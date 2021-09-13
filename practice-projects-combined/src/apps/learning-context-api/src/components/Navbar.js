import { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {

    // Grab the props you need from the BookContext. In this case we only grabbed the array of book objects.
    const { books } = useContext(BookContext);

    return (
        <div className="navbar">
            <h1>My Reading List</h1>
            <p>Currently you have {books.length} books on your list.</p>
        </div>
    )
}

export default Navbar
