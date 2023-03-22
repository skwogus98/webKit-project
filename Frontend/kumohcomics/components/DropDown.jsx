import React from "react";
import { useState, useEffect } from "react";

function DropDown(props) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(props.visibility);
    }, [props.visibility]);
    return (
        <div className={"absolute top-32 w-32 z-0 " + (visible ? "" : "hidden")}
        onMouseLeave={props.onMouseLeave}
        >
            <div className="mt-8 border-blue-200 border py-2 px-4 rounded-xl bg-blue-200 text-left space-y-4">
                {props.children}
            </div>
        </div>
    );
}

export default DropDown;
