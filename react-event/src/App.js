import { useState } from "react";
import ToDoList from "./components/ToDoList";
import toast, { Toaster } from 'react-hot-toast';

function App() {
    const [todos, setTodos] = useState([])
    return (
        <div className="App">
            <ToDoList todos={todos} setTodos={setTodos} />
            <Toaster />
        </div>
    );
}

export default App;
