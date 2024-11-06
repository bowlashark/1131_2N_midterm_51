import Book_xx from './Book_xx'
import books_data from './data/booklist_data2'

console.log('books_data', books_data)

const Booklist_xx = () => {
  return (
    <section className='booklist'>
      {books_data.map((book) => {
        const { id, img, title, author } = book
        return <Book_xx key={id} img={img} title={title} author={author} />
      })}
    </section>
  )
}

export default Booklist_xx
