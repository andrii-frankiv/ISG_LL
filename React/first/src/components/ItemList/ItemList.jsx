import React, {useState} from 'react';
import './ItemList.scss';
import Item from '../Item/Item';

  const ItemList = ({items}) => {
    // const [items, setItems] = useState([{  //function which change/create(?)
    //   id: '1',
    //   content: 'lalaa',
    // }])


    return (
      
        <div className='content'>
          { items.map( item => { 
            /*return*/
            <Item key ={item}
            // id = {el.id}
            items = {item}
            />
          })
          }
        </div>

      )
    }

  export default ItemList;