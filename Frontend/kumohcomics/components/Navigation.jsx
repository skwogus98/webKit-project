import React from "react";
import { useRouter } from "next/router";

function Navigation() {
    const router = useRouter();

    return (
        <div className="my-8 font-bold text-lg">
            {router.pathname == "/" ? "Home" : router.query.nation}
            {router.query.genre != null ? " / " + router.query.genre : ""}
        </div>
    );
}

export default Navigation;
