import Card from "./Card";
import Sadiq from "./Header"
function App() {
    let items = [1, 2, 3, 4, 5]
    return (
        <div className="App">
            <Sadiq />
            {
                items.map(item => {
                    return (
                        <Card />
                    )
                })
            }
            <h1>salam Rus</h1>
        </div>
    );
}

export default App;
