import Link from "next/link";
import Image from 'next/image'
import React from "react";
import Menu from "./Menu"
import ReadIcon from "../public/img/read.png"

function Header() {
    return(
        <div className="shadow-md">
            <div className="max-w-5xl mx-auto flex justify-center sm:justify-between p-8">
                <div className="hidden sm:block">
                    <Link href="/" className="flex justify-start space-x-4 items-center text-2xl ">
                        <Image src={ReadIcon} alt="icon" className="w-14"/>
                        <p>Kumoh Comics</p>
                    </Link>
                </div>
                <div className="block sm:hidden">
                    <Link href="/" className="flex justify-start space-x-4 items-center text-2xl">
                        <Image src={ReadIcon} alt="icon" className="w-14"/>
                        <p>Kumoh Comics Mobile</p>
                    </Link>
                </div>
                <div className="hidden sm:block space-x-4">
                </div>
            </div>
            <Menu></Menu>
        </div>
    ) ;
}

export default Header;
