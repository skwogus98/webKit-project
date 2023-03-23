import React from "react";
import { useState, useEffect } from "react";

function DropDown(props) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(props.visibility);
    }, [props.visibility]);
    return (
        <div className={"absolute top-0 w-32 z-20 drop-shadow-lg duration-150 translate-y-32" + (visible ? "" : " hidden")}
        onMouseLeave={props.onMouseLeave}
        >
            <div className="mt-8 border-blue-200 border py-2 px-4 rounded-xl bg-blue-200 text-left space-y-4">
                {props.children}
            </div>
        </div>
    );
}

export default DropDown;
