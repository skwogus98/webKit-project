import React from "react";
import { useState, useEffect, useRef } from "react";

function Carousel(props) {
    const [carousels, setCarousels] = useState([]);
    const [xPos, setXPos] = useState(-200);
    const [duration, setDuration] = useState(true);

    useEffect(() => {
        setCarousels(props.carousels.concat(props.carousels).concat(props.carousels));
        if (xPos == -400 || xPos == 0) {
            const timer = setInterval(() => {
                setDuration(false);
                setXPos(-200);
                clearInterval(timer);
            }, 100);
        }
    }, [xPos]);

    //useInterval
    function useInterval(callback, delay) {
        const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.

        useEffect(() => {
            savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
        }, [callback]);

        useEffect(() => {
            function tick() {
                savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
            }
            if (delay !== null) {
                // 만약 delay가 null이 아니라면
                let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
                return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
            }
        }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
    }
    const [delay, setDelay] = useState(2000)
    useInterval(rightButton, delay);

    function leftButton() {
        setDuration(true);
        setXPos(xPos + 20);
    }

    function rightButton() {
        setDuration(true);
        setXPos(xPos - 20);
    }

    return (
        <div className="flex items-center my-6">
            <div>
                <button onClick={leftButton} className="rounded-full p-2 mx-4">
                    ＜
                </button>
            </div>
            <div className="w-full overflow-hidden">
                <div
                    id="carousels"
                    className="flex justify-center relative"
                    style={{ width: "600%", left: xPos + "%", transitionDuration: duration ? "100ms" : "0ms" }}
                >
                    {carousels.map((value, key) => {
                        return (
                            <div key={key} className="border-black border-2 w-1/5 p-4" onMouseEnter={() => (setDelay(null))} onMouseLeave={() => (setDelay(2000))}>
                                {value.img}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                <button onClick={rightButton} className="rounded-full p-2 mx-4">
                    ＞
                </button>
            </div>
        </div>
    );
}

export default Carousel;
