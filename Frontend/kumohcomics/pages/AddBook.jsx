import React from "react";
import { useState } from "react";

function AddBook() {
    const [bookData, setBookData] = useState({title:"", category:"",nation:"",genre:"",price:""});
    return (
        <div>
            <p>책 추가</p>
            <table>
                <tr>
                    <td>제목</td>
                    <td><input type="text" value={bookData.title} onChange={(e)=>setBookData({...bookData, "title":e.target.value})}/></td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td><input type="text" value={bookData.category} onChange={(e)=>setBookData({...bookData, "category":e.target.value})}/></td>
                </tr>
                <tr>
                    <td>국가</td>
                    <td><input type="text" value={bookData.nation} onChange={(e)=>setBookData({...bookData, "nation":e.target.value})}/></td>
                </tr>
                <tr>
                    <td>장르</td>
                    <td><input type="text" value={bookData.genre} onChange={(e)=>setBookData({...bookData, "genre":e.target.value})}/></td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td><input type="text" value={bookData.price} onChange={(e)=>setBookData({...bookData, "price":e.target.value})}/></td>
                </tr>
            </table>
            <div>
                <button>
                    저장
                </button>
            </div>
        </div>
    );
}

export default AddBook;
