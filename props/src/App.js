import { useState } from "react";

function App() {
    const [color, setColor] = useState("#ff0000")
    const changeColor = () => {
        setColor(`#${Math.ceil(Math.random() * 1000000)}`)
    }
    return (
        <div className="App">
            <button onClick={changeColor}>change color</button>
            <div style={{ width: "100px", height: "100px", backgroundColor: `${color}` }}></div>
        </div>
    );
}

export default App;
