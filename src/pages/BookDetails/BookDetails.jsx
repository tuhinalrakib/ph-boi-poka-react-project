import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams()
    const bookId = parseInt(id)
    
    const data = useLoaderData()
    const singleBook = data.find(book=>book.bookId === bookId)

    const {bookName,image,author,review} = singleBook

    return (
        <div className='flex gap-12 my-6 w-full'>
            <figure className='flex-1 p-16 rounded-2xl bg-[#f3f3f3]'>
                <img className='w-[400px]' src={image} alt={bookName} />
            </figure>
            <div className='flex-1'>
                <h1 className='text-[40px] font-bold text-[#131313] mb-4'>{bookName}</h1>
                <p className='text-xl font-medium text-[rgba(19,19,19,.8)] mb-6'>By: {author}</p>
                <div className='border-t-2 border-[rgba(19,19,19,.15)]'></div> 
                <div className='mt-6'>
                    <p className='text-sm text-[rgba(19,19,19,.7)]'><span className='font-bold text-[16px]'>Review:</span>: {review}</p>
                </div>
                <button className='btn btn-accent py-3 px-5 m-5'>Mark As Read</button>
                <button className='btn'>Wish List</button>
            </div>
        </div>
    );
};

export default BookDetails;