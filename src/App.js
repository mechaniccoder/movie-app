import React from "react";

function Food({ favorite }) {
    return <h2>I love {favorite}.</h2>;
}

function App() {
    return (
        <div>
            <h1 className="App">hello</h1>
            <Food favorite="banana" />
            <Food favorite="ramen" />
            <Food favorite="samgiopsal" />
            <Food favorite="chukumi" />
        </div>
    );
}

export default App;
