import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Timer() {

    const [timer, setTimer] = useState(25);
    const [level, setLevel] = useState(1);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         console.log(timer);
    //         if (timer === 0) {
    //             clearInterval(interval); // Clear interval when timer reaches 0
    //             setLevel(prevLevel => prevLevel + 1);
    //         } else {
    //             // console.log(timer);
    //             setTimer(prevTimer => prevTimer - 1);
    //         }
    //     }, 1000);

    //     // Cleanup function to clear the interval when component unmounts
    //     return () => clearInterval(interval);
    // }, []);
    let navigate = useNavigate();
    useEffect(() => {
        //let t=3;
        let interval
        if (timer == 0) {
            console.log("stop");
            navigate("/")
        }
        else {
            interval = setInterval(() => {
                console.log(timer)
                setTimer(timer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer])

    return (
        <div>Timer: {timer}</div>
    )
}

export default Timer