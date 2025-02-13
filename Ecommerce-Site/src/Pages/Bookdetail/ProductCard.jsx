import React from 'react';
import { useParams } from 'react-router-dom';
import Booksdata from '../../Components/ProductDetail';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Details about the product

const ProductCard = () => {
  const { id } = useParams();
  const bookDatas = useSelector(state => state.book);
  const book_data = bookDatas.find(book => book.id === id);
  return (
    <section className='p-5'>
      
      <div className='flex md:flex-row flex-col justify-center gap-10 p-5 mt-5'>
        <img src={book_data.img} alt="book_img" className='h-80 w-96' />
        <div>
          <h2 className='font-semibold font-Poppins text-4xl mb-2'>Title : {book_data.title}</h2>
          <p className='font-base font-Poppins text-xl mb-2'>Description : {book_data.description}</p>
          <p className='font-Poppins text-md font-medium mt-1 text-orange-500'>Ratings {book_data.rating}+</p>
        </div>
      </div>
      <Booksdata title={'See other Collections'} />
    </section>

  )
}

export default ProductCard;