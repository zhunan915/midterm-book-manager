import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    title: "",
});

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchBook = async () => {
         try{
             const res = await axios.get(`http://localhost:8800/books/${id}`);
             setBook(res.data);
             console.log(res);
         }catch(err){
             console.log(err);
         }
    }
    fetchBook();
}, [])




  const handleChange = (e) => {
    setBook(prev => ({...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault()
    try{
        await axios.put(`http://localhost:8800/books/${id}`, book);
        navigate("/");
    }catch(err){
        console.log(err);
    }
  }

  console.log(book);

  return (
    <div className='form'>
        <h1>Update Book</h1>
        <input type="text" placeholder='title' onChange={handleChange} value={book.title} name='title'/>
        <input type="text" placeholder='desc' onChange={handleChange} value={book.desc} name='desc'/>
        <input type="number" placeholder='price' onChange={handleChange} value={book.price} name='price'/>
        <input type="text" placeholder='cover' onChange={handleChange} value={book.cover} name='cover'/>
        <button className="formButton" onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update