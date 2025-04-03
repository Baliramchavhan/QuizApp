import React from "react";
import Quiz from "./components/Quiz.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Quiz App</h1>
        <Quiz />  {/* Renders the Quiz Component */}
      </header>
    </div>
  );
}

export default App;
