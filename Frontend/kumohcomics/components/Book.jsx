import React from "react";
import { useState, useEffect } from "react";

function Book(props) {
    const [bookData, setBookData] = useState({});
    useEffect(() => {
        setBookData(props.book ? props.book : { title: "", category: "", nation: "", genre: "", price: "" });
    }, []);
    return (
        <table className="table-auto w-full border-collapse my-8">
            <tbody>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">제목</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.title || ""}
                            onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">카테고리</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.category || ""}
                            onChange={(e) => setBookData({ ...bookData, category: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">국가</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.nation || ""}
                            onChange={(e) => setBookData({ ...bookData, nation: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">장르</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.genre || ""}
                            onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">가격</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.price || ""}
                            onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Book;
