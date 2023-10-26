import "./CategoryItem.css"
import React from 'react'



const CategoryItem = ({ datas }) => {
  return (
    <div className='CContainer'>
     
        <img className="img" src={datas.img} />
      
      <div className='Info'>
        <div className='Title'>{datas.title}</div>
        <button>SHOP NOW</button>
      </div>
    </div>
  )
}

export default CategoryItem
