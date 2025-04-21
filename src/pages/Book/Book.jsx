import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({signleBook}) => {
    const {bookName,image,rating,category,tags,yearOfPublishing,bookId,publisher} = signleBook

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className='shadow-xl'>
            <div className="card bg-base-100 w-96 shadow-sm p-6">
                <figure className='p-4 px-24 bg-[#F3F3F3] w-full mx-auto'>
                    <img
                        className='h-[166px]'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-around items-center'>
                        {
                            tags.map((tag,i)=><button key={i} className='p-2 rounded-xl text-[#ffffff] font-semibold bg-fuchsia-700'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName} <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>Book by: {publisher}</p>
                    <div className='border-b-[1px] border-dashed'></div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Book;