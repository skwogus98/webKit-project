import React from "react";
import Book from "@/components/Book";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function editBook() {
    const [bookData, setBookData] = useState([]);
    const [changedBook, setChangedBook] = useState(null);
    const router = new useRouter();

    async function getBookDetail() {
        try {
            const response = await axios.get("http://localhost:8000/bookDetail?id=" + router.query.id);
            console.log(response.data[0]);
            setBookData(response.data[0]);
        } catch (error) {
            console.error(error);
            setBookData([
                {
                    id: 52,
                    title: "test",
                    category: "ts",
                    nation: "일본 만화",
                    genre: "모름",
                    price: 123,
                    date: "2023-03-21T04:26:35.000+00:00",
                },
            ]);
        }
    }

    async function insertBook() {
        console.log(bookData);
        try {
            const response = await axios.post("http://localhost:8000/insert", changedBook);
            console.log(response.data);
            alert("수정되었습니다.")
            window.location.href = ("/")
        } catch (error) {
            console.error(error);
        }
    }

    function changeBook(book) {
        setChangedBook(book);
    }

    useEffect(() => {
        getBookDetail();
    }, [router.query.id]);
    return (
        <div>
            <p>책 정보</p>
            <Book book={bookData} disabled={false} changeBook={changeBook}></Book>
            <div className="flex justify-end">
                <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500" onClick={insertBook}>
                    저장
                </button>
            </div>
        </div>
    );
}

export default editBook;
