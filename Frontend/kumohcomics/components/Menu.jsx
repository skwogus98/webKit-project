import Link from "next/link";
import React, { useState } from "react";

function Menu() {
    var menus = [
        { menu: "Home", category: [], url: "/" },
        { menu: "국내 만화", category: ["순정만화", "소년만화", "성인만화", "기획도서", "만화잡지"], url:"/books/국내 만화" },
        { menu: "일본 만화", category: ["순정만화", "소년만화", "성인만화", "기획도서"], url:"/books/일본 만화" },
        { menu: "미국 만화", category: ["DC 코믹스 마블", "코믹스터러리", "그래픽노블"], url:"/books/미국 만화" },
    ];
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className="max-w-5xl mx-auto flex justify-between p-4"
            onMouseEnter={() => setMenuOpen(true)}
            onMouseLeave={() => setMenuOpen(false)}
        >
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="text-center w-1/3 space-y-2">
                        <Link href={menu.url}>{menu.menu}</Link>
                        {isMenuOpen ? <hr/> : ""}
                        <div className={(isMenuOpen ? "space-y-2" : "hidden space-y-2")}>
                            {menu.category.map((category, key) => {
                                return (
                                    <div key={key}>
                                        <Link href={menu.url+"?genre="+category}>{category}</Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
