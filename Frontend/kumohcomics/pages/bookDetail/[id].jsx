import React from 'react'

function bookDetail() {
  return (
    <div>
        <div>
            <p>책 추가</p>
            <table>
                <tr>
                    <td>제목</td>
                    <td>{bookData.title}</td>
                </tr>
                <tr>
                    <td>카테고리</td>
                    <td>{bookData.category}</td>
                </tr>
                <tr>
                    <td>국가</td>
                    <td>{bookData.nation}</td>
                </tr>
                <tr>
                    <td>장르</td>
                    <td>{bookData.genre}</td>
                </tr>
                <tr>
                    <td>가격</td>
                    <td>{bookData.price}</td>
                </tr>
            </table>
            <div>
                <button>
                    수정
                </button>
                <button>
                    삭제
                </button>
            </div>
        </div>
    </div>
  )
}

export default bookDetail