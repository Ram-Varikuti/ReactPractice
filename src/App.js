import React from "react"
import Counter from "./counterTracker.jsx";
import StopWatch from "./stopWatch.jsx";
import Todos from "./todos.jsx";
function App() {
    return (
        <div className="App">
            <Counter />
            <StopWatch />
            <Todos />
        </div>
    );
}

export default App;