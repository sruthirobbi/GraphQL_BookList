import React,{useState} from 'react';
import { useQuery,useMutation } from '@apollo/react-hooks';
import {getAuthorsQuery,addBookMutation,getBooksQuery} from '../../queries/queries';

function AddBook(){
    let input;
    const [bookData,setBookData] = useState({name:'',genre:'',authorId:''});
    const [book] = useMutation(addBookMutation);
    const {loading,error,data} = useQuery(getAuthorsQuery);

    const submitForm =(e)=>{
        e.preventDefault();
        book({
            variables:{
                name:bookData.name,
                genre:bookData.genre,
                authorId:bookData.authorId
            },
            refetchQueries:[{query:getBooksQuery}]
        })
    }

    if(loading) return <div>Authors Loading....</div>;

    return(
        <form id="add-book"
                onSubmit={submitForm}
        >
            <div className="field">
                <label>Book Name:</label>
                <input type="text" value={bookData.name}  onChange={e=>setBookData({...bookData,name:e.target.value})}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text"  value={bookData.genre} onChange={e=>setBookData({...bookData,genre:e.target.value})}/>
            </div>


            <div className="field">
                <label>Author:</label>
                <select onChange={e=>setBookData({...bookData,authorId:e.target.value})} value={bookData.authorId}>
                    <option>Select Author</option>
                    {data.authors.map(list=>(
                            <option key={list.id} value={list.id}>{list.name}</option>
                    ))}
                </select>
                
            </div>

            <button type="submit">+</button>
        </form>
    )
}

export default AddBook;