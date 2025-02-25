import React, { useState } from "react";


const App = () => {
    let [counter, setcounter] = useState(0);

    const clickHandler = (sign) => {
        if (sign === '+') {
            setcounter(counter + 1);
        } else {
            if (counter > 0)
                setcounter(counter - 1);
        }
    }

    return (
        <h1>
            <p>Counter {counter} times!!</p>
            <button onClick={() => clickHandler('+')}>+</button>
            <button onClick={() => clickHandler('-')}>-</button>
        </h1>
    )
}

export default App