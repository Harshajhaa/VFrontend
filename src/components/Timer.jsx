import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Timer({level,setLevel}) {

    const [timer, setTimer] = useState(3);
    

  
    let navigate = useNavigate();
    useEffect(() => {
        
        let interval
        if (timer == 0) {
            setLevel(level+1);

            
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