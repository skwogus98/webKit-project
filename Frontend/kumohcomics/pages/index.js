import Carousel from "./../components/Carousel";
import BookTable from "./../components/BookTable";
import Navigation from "./../components/Navigation";
import Search from "./../components/Search";

import { useState, useEffect } from "react";
import axios from "axios";

function index() {
    var carousels = [
        { id: 1, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788934926467.jpg" }, //식객
        { id: 2, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791160859720.jpg" }, //오니마이
        { id: 3, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791169255783.jpg" }, //슈퍼맨
        { id: 4, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791169254526.jpg" }, //배트맨
        { id: 5, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791133430826.jpg" }, //h2
        { id: 6, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788925833637.jpg" }, //공포의 외인구단
        { id: 7, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788959194117.jpg" }, //살인자ㅇ난감
        { id: 8, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9788952772510.jpg" }, //스파이더 맨
        { id: 9, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791133400430.jpg" }, //보쿠걸
        { id: 10, src: "https://contents.kyobobook.co.kr/sih/fit-in/200x0/pdt/9791136267498.jpg" }, //철야의 노래
    ];
    const [books, setBooks] = useState([]);
    async function getBookList() {
        try {
            const response = await axios.get("http://localhost:8000/bookList?nation=&genre=");
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

    function changeList(books) {
        setBooks(books);
    }

    useEffect(() => {
        getBookList();
    }, []);

    return (
        <div>
            <p>추천 도서</p>
            <Carousel carousels={carousels} />
            <Navigation />
            <Search changeList={changeList} />
            <BookTable books={books} />
        </div>
    );
}

export default index;
