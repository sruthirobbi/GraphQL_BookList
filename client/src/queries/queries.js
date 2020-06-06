import { gql } from 'apollo-boost';

const getBooksQuery = gql`
{
    books{
        name
        id
        genre
    }
}
`

const getAuthorsQuery = gql`
    {
        authors{
            name,
            id
        }
    }
`

const addBookMutation =gql`
    mutation($name:String!,$genre:String!,$authorId:ID!){
        addBook(name:$name,genre:$genre,authorId:$authorId){
            name,
            id
        }
    }
`
const getBookDetailsQuery = gql`
    query($id:ID){
            book(id:$id){
                name,
                genre,
                id,
                author{
                    id,
                    name,
                    age,
                    book{
                        name
                        id
                    }
                }
            }
        }
`
export {getAuthorsQuery,getBooksQuery,addBookMutation,getBookDetailsQuery};