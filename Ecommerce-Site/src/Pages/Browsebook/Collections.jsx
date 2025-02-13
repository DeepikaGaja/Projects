import React, { useState } from 'react';
import Categories from '../../Components/ProductList';
import Booksdata from '../../Components/ProductDetail';
import Searchfield from '../../Components/Searchfield';

//Filtering the collections

const Collections = () => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchTxt = (inputValue) => {
    setInputValue(inputValue);
  }

  return (
    <div className='p-2'>
      <section>
        <Categories />
        <Searchfield handleText={handleSearchTxt}/>
        <Booksdata title={'All Collections'} inputValue={inputValue} />
      </section>
    </div>
  )
}

export default Collections