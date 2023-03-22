import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Search(props) {
    const router = useRouter();
    const [searchData, setSearchData] = useState("");
    async function getBookList() {
        try {
            var nation = router.query.nation != null ? router.query.nation : ""
            var genre = router.query.genre != null ? router.query.genre : ""
            const response = await axios.get("http://localhost:8000/bookSearch?title="+searchData+"&nation="+nation+"&genre="+genre);
            console.log(response.data);
            props.changeList(response.data)
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
        <div className="my-4 space-x-4 flex justify-end">
            <input
                type="text"
                value={searchData}
                onChange={(e) => {
                    setSearchData(e.target.value);
                }}
                className="border-2 rounded-lg p-1"
                maxLength={30}
            />
            <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500" onClick={getBookList}>검색</button>
            <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">
                <Link href="/AddBook">추가</Link>
            </button>
        </div>
    );
}

export default Search;
