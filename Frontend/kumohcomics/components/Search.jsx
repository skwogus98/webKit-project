import React from "react";
import Link from "next/link";
import { useState } from "react";

function Search() {
    const [searchData, setSearchData] = useState("");
    return (
        <div className="my-4 space-x-4 flex justify-end">
            <input
                type="text"
                value={searchData}
                onChange={(e) => {
                    setSearchData(e.target.value);
                }}
                className="border-2 rounded-lg p-1"
                maxlength="30"
            />
            <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">검색</button>
            <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">
                <Link href="/AddBook">추가</Link>
            </button>
        </div>
    );
}

export default Search;
