import React from 'react'
import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'

const Blog_51 = ({ id, title, img, category, descrip }) => {
  return (
    <article key={id} className='blog'>
      <img src={img} alt='Coffee photo' className='img blog-img' />
      <div className='blog-content'>
        <span>
          {category}
          {category === 'lifestyle' ? (
            <FaMugSaucer />
          ) : category === 'travel' ? (
            <FaGlobe />
          ) : (
            ''
          )}
        </span>
        <h3>{title}</h3>
        <p>{descrip}</p>
        <a href='#'>read more</a>
      </div>
    </article>
  )
}

export default Blog_51
