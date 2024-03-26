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
        return toast.error('Book Already Added')
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    toast.success('Book Added Successfully')
    
}

//-----------------------------------------------------------------------------

export const getWishlistBooks = () =>{
    let wishlistBooks = []
    const storedWishlistBooks = localStorage.getItem('wishlistBooks')
    if(storedWishlistBooks){
        wishlistBooks = JSON.parse(storedWishlistBooks)
    }
    return wishlistBooks
}

export const saveWishlistBook = wishlistBook =>{
    
    let wishlistBooks = getWishlistBooks()
    let books = getBooks()
    const isExist = wishlistBooks.find(b => b.bookId === wishlistBook.bookId)
    const bookExist = books.find(b => b.bookId === wishlistBook.bookId)
    
    if(isExist){
        return toast.error('Book Already Added')
    }   
    if(bookExist){
        return toast.error('Book Already Added')
    }
    
    wishlistBooks.push(wishlistBook)
    localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks))
    toast.success('Book Added Successfully')
    
}
