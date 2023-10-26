
import React from 'react'
import CategoryItem from './CategoryItem';
import { Category } from '../Data';
import "./Categories.css"

const Categories = () => {
  return (
    <div className='IContainer'>
      {
        Category.map((item) => {
          return <CategoryItem datas={item}  key={item.id}/>
        })
      }
    </div>
  )
};

export default Categories
