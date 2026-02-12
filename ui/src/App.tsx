import "./App.css";

function buttonLogger() {
    console.log("HELLO!!!!");
}

export default function App() {
    return (
        <>
            <button onClick={buttonLogger}>HI</button>
            <p>hello</p>
        </>
    );
}
