import React from "react";
import Book from "../components/Book"

function AddBook() {
    
    return (
        <div>
            <p><b>책 추가</b></p>
            <Book/>
            <div className="flex justify-end">
                <button className="bg-gray-300 rounded-lg p-1 px-4 hover:bg-gray-500">저장</button>
            </div>
        </div>
    );
}

export default AddBook;
