import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Search(props) {
    const router = useRouter();
    const [searchData, setSearchData] = useState("");
    const [price, setPrice] = useState(10000);
    const [filter, setFilter] = useState(false);
    const [showfilter, setShowFilter] = useState(false);
    async function getBookList() {
        try {
            var nation = router.query.nation != null ? router.query.nation : "";
            var genre = router.query.genre != null ? router.query.genre : "";
            var url = "http://localhost:8000/bookSearch?title=" + searchData + "&nation=" + nation + "&genre=" + genre + "&price=" + (filter ? price : -1)
            const response = await axios.get(url);
            console.log(response.data);
            props.changeList(response.data);
        } catch (error) {
            console.error(error);
            props.changeList([
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
                { title: "title", category: "cat", price: "10000" },
            ]);
        }
    }
    return (
        <div>
            <div className="my-4 space-x-4 flex justify-end">
                <input
                    type="text"
                    value={searchData}
                    onChange={(e) => {
                        setSearchData(e.target.value);
                    }}
                    className="border-2 rounded-lg p-1 w-1/3"
                    maxLength={30}
                />
                <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500" onClick={getBookList}>
                    검색
                </button>
                <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500" onClick={()=>{setShowFilter(!showfilter)}}>
                    필터
                </button>
                <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">
                    <Link href="/AddBook">추가</Link>
                </button>
            </div>
            <div className={"my-4 space-x-4 flex justify-end items-center "+(showfilter? "block":"hidden")}>
                <input type="checkbox" value={filter} onChange={(e)=>{setFilter(e.target.value)}} />
                <label>가격 필터링(이하)</label>
                <input
                    type="number"
                    min={0}
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                    }}
                    className="border-2 rounded-lg p-1 w-1/4"
                    disabled={(!filter)}
                />
            </div>
        </div>
    );
}

export default Search;
