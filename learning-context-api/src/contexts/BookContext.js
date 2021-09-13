import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";
export const BookContext = createContext();


const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], () => {

        const localData = localStorage.getItem('booklist');
        // If there is data in local storage, return it as the current state of the books array.
        // If Not then just return an empty array. (which is the original state of books without local storage)
        return localData ? JSON.parse(localData) : []
    })

    // Save Books state into local storage whenever it changes.
    useEffect(() => {
        localStorage.setItem('booklist', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider
