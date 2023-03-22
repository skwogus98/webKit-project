import React from "react";
import { useState, useEffect } from "react";
import Book from "@/components/Book";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

function bookDetail() {
    const [bookData, setBookData] = useState([])
    const router = new useRouter();

    async function getBookDetail() {
        try {
            const response = await axios.get("http://localhost:8000/bookDetail?id="+router.query.id);
            console.log(response.data[0]);
            setBookData(response.data[0]);
        } catch (error) {
            console.error(error);
            setBookData([
                {
                    "id": 52,
                    "title": "test",
                    "category": "ts",
                    "nation": "일본 만화",
                    "genre": "모름",
                    "price": 123,
                    "date": "2023-03-21T04:26:35.000+00:00"
                    }
            ]);
        }
    }
    useEffect(()=>{
        getBookDetail()
    },[])

    async function deleteBook() {
        try {
            const response = await axios.delete("http://localhost:8000/book?id="+bookData.id);
            console.log(response.data);
            alert("삭제 되었습니다.")
            window.location.href = ("/")
        } catch (error) {
            console.error(error);
            alert("삭제 실패.")
        }
    }
    return (
        <div>
            <div>
                <p>책 정보</p>
                <Book book={bookData} disabled={true}></Book>
                <div className="flex justify-end space-x-4">
                    <Link href={"/editBook/"+router.query.id} className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">수정</Link>
                    <button onClick={deleteBook} className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">삭제</button>
                </div>
            </div>
        </div>
    );
}

export default bookDetail;
