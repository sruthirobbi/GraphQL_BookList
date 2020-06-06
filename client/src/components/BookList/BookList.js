import React,{useState} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getBooksQuery} from '../../queries/queries';
import BookDetails from '../BookDetails/BookDetails';

function BookList() {
    const [getBookId,setBookId] = useState('');
    const {loading,error,data} = useQuery(getBooksQuery);

    if (loading) return <div>Books Loading...</div>;
    if(error) return <div>Error Loading...</div>

    return (
        <div>
            <ul id="book-list" >
            {data.books.map(book=>(
                <li key={book.id} onClick={e=>setBookId(book.id)}>{book.name} </li>
            ))}
            </ul>
            <BookDetails bookid={getBookId}/>
        </div>
    );
}

export default BookList;
