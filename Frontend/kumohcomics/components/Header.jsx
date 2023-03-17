import Link from "next/link";
import React from "react";

function Header() {
    return(
        <div className="flex justify-center sm:justify-between p-8">
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
    ) ;
}

export default Header;
