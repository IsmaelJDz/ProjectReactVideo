import React from 'react';
import Category from './category';
import './categories.css';

function Categories(props) {
  return(
    <div className="Categories">
      {
        props.categories.map((i) =>{
          return <Category key={i.id} {...i} />
        })
      }     
    </div>
  )
}

export default Categories;