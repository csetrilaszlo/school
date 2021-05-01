import { useState } from 'react';

export function Counter() {
    const [counterNumber, setCounterNumber] = useState(0);
    const [showText, setShowText] = useState(true);
    console.log('Render Counter');
    return <div className='counter'> 
    <h3>Count:</h3>
    <p>{counterNumber}</p>
    <button onClick={() => {
        setCounterNumber(counterNumber + 1);
        setShowText(false);
    }}>Press Me</button>
    </div>
}