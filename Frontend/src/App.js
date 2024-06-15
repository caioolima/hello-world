import React from "react";
import "./App.css";
import HelloWorld from "./Componets/Pages/HelloWorld";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HelloWorld /> {/* Renderizando o componente HelloWorld */}
      </header>
    </div>
  );
}

export default App;
