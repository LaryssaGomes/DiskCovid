import React from 'react';

// import { Container } from './styles';

function Input({ value, setValue }) {
  return (
    <input 
      type="text" 
      value={name} placeholder="Nome Completo" 
      onChange={(event) => setName(event.target.value)}
    />
  );
}

export default Input;