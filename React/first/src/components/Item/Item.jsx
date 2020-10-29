
import React from 'react';
import './Item.scss';

const Item = ({items}) => {

  const [id,setId]=(0);

    return (

          <div className='row-item'>
            <p className='item-id'>{setId(id+1)}</p>
            <p className='item-content'>{items}</p>
            <button className='item-btn'>X</button>
          </div>


      )
  }

  export default Item;