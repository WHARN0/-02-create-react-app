import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    
    function hadleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Hitungan: {count}</h1>
            <button onClick={hadleClick}>Tambah</button> 
        </div>
    );
}

export default Counter;