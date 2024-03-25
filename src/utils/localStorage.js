import toast from "react-hot-toast"

export const getBooks = () =>{
    let books = []
    const storedBooks = localStorage.getItem('books')
    if(storedBooks){
        books = JSON.parse(storedBooks)
    }
    return books
}

export const saveBook = book =>{
    let books = getBooks()
    const isExist = books.find(b => b.bookId === book.bookId)
    if(isExist){
        return toast.error('Already Added This Book')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added Successfully!')
}