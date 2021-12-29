import React, { ChangeEvent, FormEvent, useState } from 'react'
/* import PropTypes from 'prop-types'; */

import { Dispatcher } from '../types/Dispatcher';


type AddCategoryProps = {
  setCategories: Dispatcher<string[]>;
}


export function AddCategory({ setCategories }: AddCategoryProps) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(inputValue.trim().length > 2) {
      setCategories((cats: string[]) => [inputValue, ...cats]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      ></input>
    </form>
  );
}

/* AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
} */
