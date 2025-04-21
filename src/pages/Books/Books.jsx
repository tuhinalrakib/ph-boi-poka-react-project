import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([])

    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json())
    //     .then(data=>setAllBooks(data))
    // },[])
    return (
        <div className='my-6'>
            <h1 className='text-center p-6 text-3xl font-semibold'>Books</h1>
            <Suspense fallback={<span>Lodaing Books.....</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map(signleBook=> <Book key={signleBook.bookId} signleBook={signleBook}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;