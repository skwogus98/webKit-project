import React from "react";
import { useState, useEffect } from "react";

function Book(props) {
    var menus = [
        { menu: "국내 만화", genre: ["순정만화", "소년만화", "성인만화", "기획도서", "만화잡지"] },
        { menu: "일본 만화", genre: ["순정만화", "소년만화", "성인만화", "기획도서"] },
        { menu: "미국 만화", genre: ["DC 코믹스 마블", "코믹스터러리", "그래픽노블"] },
    ];
    const [bookData, setBookData] = useState({});

    useEffect(() => {
        setBookData(props.book ? props.book : { title: "", genre: "", nation: "", genre: "", price: "" });
    }, [props.book]);

    useEffect(()=>{
        if(props.changeBook){
            props.changeBook(bookData)
        }
    }, [bookData])

    const [genre, setgenre] = useState([]);
    
    useEffect(()=>{
        for(var menu of menus){
            if(menu.menu==bookData.nation){
                setgenre(menu.genre)
            }
        }
    },[bookData.nation])
    return (
        <table className="table-auto w-full border-collapse my-8">
            <tbody>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">제목</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.title ? bookData.title : ""}
                            onChange={(e) => setBookData({ ...bookData, title: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                            disabled={props.disabled}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">카테고리</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="text"
                            value={bookData.category ? bookData.category : ""}
                            onChange={(e) => setBookData({ ...bookData, category: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                            disabled={props.disabled}
                        />
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">국가</td>
                    <td className="border border-slate-300 p-2">
                        <select
                            value={bookData.nation ? bookData.nation : 0}
                            onChange={(e) => setBookData({ ...bookData, nation: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                            disabled={props.disabled}
                        >
                            <option value={0}>국가를 선택해주세요</option>
                            {menus.map((val, idx) => {
                                return (
                                    <option value={val.menu} key={idx}>
                                        {val.menu}
                                    </option>
                                );
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">장르</td>
                    <td className="border border-slate-300 p-2">
                        <select
                            value={bookData.genre || 0}
                            onChange={(e) => setBookData({ ...bookData, genre: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                            disabled={props.disabled}
                        >
                            <option value={0}>장르를 선택해주세요</option>
                            {bookData.nation==null || bookData.genre==null
                                ? null
                                : genre.map((val, idx) => {
                                      return (
                                          <option value={val} key={idx}>
                                              {val}
                                          </option>
                                      );
                                  })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td className="bg-slate-200 border border-slate-300 p-2">가격</td>
                    <td className="border border-slate-300 p-2">
                        <input
                            type="number"
                            value={bookData.price || ""}
                            onChange={(e) => setBookData({ ...bookData, price: e.target.value })}
                            className="border border-gray-300  w-full rounded-md px-2 py-1"
                            disabled={props.disabled}
                        />
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Book;
