import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Book from "../components/Book";

function AddBook() {
    const [bookData, setBookData] = useState([])
    function changeBook(book){
        setBookData(book)
    }

    async function insertBook() {
        console.log(bookData)
        try {
            const response = await axios.post("http://localhost:8000/insert", bookData);
            console.log(response.data);
            alert("추가 되었습니다.")
            window.location.href = ("/")
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <p>
                <b>책 추가</b>
            </p>
            <Book changeBook={changeBook} />
            <div className="flex justify-end">
                <button 
                className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500"
                onClick={insertBook}>저장</button>
            </div>
        </div>
    );
}

export default AddBook;
