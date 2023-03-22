import Carousel from "./../components/Carousel";
import BookTable from "./../components/BookTable";
import Navigation from "./../components/Navigation";
import Search from "./../components/Search";

import { useState, useEffect } from "react";
import axios from "axios";

function index() {
    var carousels = [{ img: 1 }, { img: 2 }, { img: 3 }, { img: 4 }, { img: 5 }, { img: 6 }, { img: 7 }, { img: 8 }, { img: 9 }, { img: 10 }];
    const [books, setBooks] = useState([])
    async function getBookList() {
        try {
            const response = await axios.get("http://localhost:8000/bookList?nation=&genre=");
            console.log(response.data);
            setBooks(response.data)
        } catch (error) {
            console.error(error);
            setBooks([
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
            ]);
        }
    }

    function changeList(books){
        setBooks(books)
    }

    useEffect(()=>{getBookList()},[])

    return (
        <div>
            <p>추천 도서</p>
            <Carousel carousels={carousels} />
            <Navigation />
            <Search changeList={changeList}/>
            <BookTable books={books} />
        </div>
    );
}

export default index;
