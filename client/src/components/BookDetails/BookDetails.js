import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {getBookDetailsQuery} from '../../queries/queries';

function BookDetails(props){
    const {loading,error,data} = useQuery(getBookDetailsQuery, {
                variables:{
                    id:props.bookid
                }
    });

   const displayBookDetails = () => {
       const {book} = props.bookid;
       console.log("********",data)
       if(data){
           return(
               <div>
                   <h2>{data.book.name}</h2>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <p>All Books by this author: </p>
                    <ul className="other-books">
                        {data.book.author.book.map(item=>{
                            return <li key={item.id}>{item.name}</li>
                        })}
                    </ul>
               </div>
           )
       }else{
           return(
               <div>No Book Selected</div>
           )
       }
   }
    
    if(loading) return <div>Book Details Loading...</div>

    return(
        <div id="bookDetails">
            {displayBookDetails()}
        </div>
    )
};

export default BookDetails;
