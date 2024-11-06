import { useState, useEffect } from 'react'
import { FaGlobe } from 'react-icons/fa6'
import { FaMugSaucer } from 'react-icons/fa6'

// let api_url = `http://localhost:3000/api/blog_51`

import { supabase } from '../db/clientSupabase'

const BlogSupaPage_51 = () => {
  const [name, setName] = useState('Hsingtai Chung')
  const [id, setId] = useState(123456789)
  const [blogs, setBlogs] = useState([])

  const fetchBlogsFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('blog_51').select('*')
      // const response = await fetch(api_url)
      // const data = await response.json()
      console.log('supabase blogs', data)
      setBlogs(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchBlogsFromSupabase()
  }, [])

  return (
    <section className='blogs'>
      <div className='section-title'>
        <h2>latest blogs from Supabase</h2>
        <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          {name}, {id}
        </h2>
      </div>
      <div className='blogs-center'>
        {blogs?.map((blog) => {
          const { id, title, img, category, descrip } = blog
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
        })}
      </div>
    </section>
  )
}

export default BlogSupaPage_51
