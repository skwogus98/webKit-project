import React from "react";

function BookTable(props) {
    return (
        <div>
            <table className="w-full table-auto">
                <thead className="border-b bg-gray-300">
                    <tr>
                        <th className="w-1/2 text-center p-2">제목</th>
                        <th className="w-1/4 text-center">카테고리</th>
                        <th className="w-1/4 text-center">가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.books.map((value, key)=>{
                            return(
                                <tr key={key} className="border-b ">
                                    <td className="p-2">
                                        {value.title}
                                    </td>
                                    <td className="text-center p-2">
                                        {value.category}
                                    </td>
                                    <td className="text-right p-2">
                                        {value.price}원
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BookTable;
