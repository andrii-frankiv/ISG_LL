
import React from 'react';
import './ItemInput.css';

const ItemInput = ({addItems}) => {
  
  const onChange = (event)   =>{
    const value = event.target.value;
    console.log(value);
    return value;
  }
  
    return (

        <div>
          <input type='text' className='item-input' placeholder='some text' onChange={onChange}/>
          <button onClick={addItems()}></button>
        </div>

    )
  }

export default ItemInput;
