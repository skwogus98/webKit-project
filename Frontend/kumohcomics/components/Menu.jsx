import Link from "next/link";
import React, { useState } from "react";
import DropDown from "./DropDown";

function Menu() {
    var menus = [
        { menu: "Home", category: [], url: "/" },
        { menu: "국내 만화", category: ["순정만화", "소년만화", "성인만화", "기획도서", "만화잡지"], url: "/books/국내 만화" },
        { menu: "일본 만화", category: ["순정만화", "소년만화", "성인만화", "기획도서"], url: "/books/일본 만화" },
        { menu: "미국 만화", category: ["DC 코믹스 마블", "코믹스터러리", "그래픽노블"], url: "/books/미국 만화" },
    ];
    const [isMenusOpen, setMenuOpen] = useState([false, false, false, false]);
    function mouseOn(num) {
        isMenusOpen[num] = true;
        setMenuOpen([...isMenusOpen]);
        console.log(isMenusOpen);
    }
    function mouseLeave(num) {
        isMenusOpen[num] = false;
        setMenuOpen([...isMenusOpen]);
        console.log(isMenusOpen);
    }
    return (
        <div className="max-w-5xl mx-auto flex justify-between p-4 text-center">
            {menus.map((menu, key) => {
                return (
                    <div key={key} className="text-center w-32 space-y-2" onMouseLeave={() => mouseLeave(key)}>
                        <div onMouseEnter={() => mouseOn(key)} className="z-30 relative">
                            <Link href={menu.url}>{menu.menu}</Link>
                        </div>
                        <div className="hidden sm:block">
                            {
                                menu.category.length==0? null:
                                (<DropDown visibility={isMenusOpen[key]} onMouseLeave={() => mouseLeave(key)}>
                                    <ul>
                                        {menu.category.map((category, key) => {
                                            return (
                                                    <li key={key}>
                                                        <Link href={menu.url + "?genre=" + category}>{category}</Link>
                                                    </li>
                                            );
                                        })}
                                    </ul>
                                </DropDown>)
                            }
                        </div>
                        <div className="block sm:hidden">
                            {menu.category.length==0? null:
                            (
                                <ul>
                                    {menu.category.map((category, key) => {
                                        return (
                                                <li key={key}>
                                                    <Link href={menu.url + "?genre=" + category}>{category}</Link>
                                                </li>
                                        );
                                    })}
                                </ul>)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;
