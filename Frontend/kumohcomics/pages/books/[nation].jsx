import React from "react";
import BookTable from "@/components/BookTable";
import Navigation from "../../components/Navigation";
import Search from "@/components/Search";

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

function category(props) {
    const router = new useRouter();
    const [books, setBooks] = useState([]);
    async function getBookList() {
        try {
            const response = await axios.get("http://localhost:8000/bookList?nation=" + router.query.nation + "&genre=" + (router.query.genre!=undefined ? router.query.genre : ""));
            console.log(response.data);
            setBooks(response.data);
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
    function changeBooks(books){
        setBooks(books);
    }
    useEffect(()=>{getBookList()},[router.query])
    return (
        <div>
            <Navigation />
            <Search changeList={changeBooks}/>
            <BookTable books={books}/>
        </div>
    );
}

export default category;
