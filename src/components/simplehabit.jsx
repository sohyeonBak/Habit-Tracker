import React, { useCallback, useEffect, useRef, useState } from 'react';

const Simplehabit = () => {
    const [count, setCount] = useState(0);
    const sapnRef = useRef();

    const handleIncrement = useCallback(()=>{         
        setCount(count +1 )
    });

    useEffect(()=>{
        console.log(`mounted & update : ${count}`)
    }, [])
    return (
        <li className="habit">
                <span ref={sapnRef} className="habit-name">Reading</span>
                <span className="habit-count">{count}</span>
                <button 
                    className="habit-button habit-increase"
                    onClick={handleIncrement}
                >
                    <i class="fas fa-plus-square"></i>
                </button> 
            </li>
    );

    }
    


export default Simplehabit;
