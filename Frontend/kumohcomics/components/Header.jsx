import Link from "next/link";
import React from "react";
import Menu from "./Menu"

function Header() {
    return(
        <div className="shadow-md">
            <div className="max-w-5xl mx-auto flex justify-center sm:justify-between p-8">
                <div>
                    <Link href="/">icons</Link>
                </div>
                <div className="hidden sm:block space-x-4">
                    <Link href="/">icons</Link>
                    <Link href="/">icons</Link>
                    <Link href="/">icons</Link>
                    <Link href="/">icons</Link>
                    <Link href="/">icons</Link>
                </div>
            </div>
            <Menu></Menu>
        </div>
    ) ;
}

export default Header;
