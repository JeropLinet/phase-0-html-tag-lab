import { useState } from "react";
import { useEffect } from "react";
function BookList(){
    const [books,setBooks] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/')
        .then (res => res.jso())
        .then(data => setBooks(data))
    },[])
    return(
        <>
         <h1>Hello,Welcome to Novel Nexus</h1>\
         <ul>
            {books.map(book =>(
            <div className="card" key={book.id}>
                 <h2>{book.title}</h2>
                 <p>Genre:{book.genre}</p>
                 <p>Author:{book.author}</p>

            </div>
            ))}
        </ul>    
        </>
    )
}

export default BookList