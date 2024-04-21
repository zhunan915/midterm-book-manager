import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UilPlusCircle } from '@iconscout/react-unicons'

const Books = () => {

   const [books, setBooks] = useState([]);

   useEffect(() => {
       const fetchAllBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
                console.log(res);
            }catch(err){
                console.log(err);
            }
       }
       fetchAllBooks();
   }, [])

   const handleDelete = async(id) => {
        try{
            await axios.delete(`http://localhost:8800/books/${id}`); 
            window.location.reload();
        }catch(err){
            console.log(err);
        }

   }
    
  return (
    <div>
        <div className="header">
        <h1>Radith's Book Shop</h1>
        <div className='icons'><Link to="/add"><UilPlusCircle className="icon" size="30"/></Link></div>
        </div>
        
        <div className="books">
            {books.map(book => (
                <div className="book" key={book.id}>
                    {book.cover && <img src={book.cover} alt="" />}
                    <h2>{book.title}</h2>
                    <p>{book.desc}</p>
                    <span>{book.price}$</span>
                    <div className="btnContainer">
                        <button className='delete' onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className='update'><Link to={`/update/${book.id}`} className="update-link">Update</Link></button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Books