import React from "react";
import { useRouter } from "next/router";
import category from "./../pages/books/[category]";

function Navigation() {
    const router = useRouter();

    return (
        <div>
            {router.pathname == "/" ? "Home" : router.query.category}
            {router.query.genre != null ? " / " + router.query.genre : ""}
        </div>
    );
}

export default Navigation;
