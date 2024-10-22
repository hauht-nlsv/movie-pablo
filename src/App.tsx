import React from "react";
import Commento from "./Commento"; // Import the Commento component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Blog</h1>
      </header>
      <main>
        <p>This is an example of a page where Commento.io is integrated.</p>

        {/* Render the Commento component here */}
        <Commento id="commento" />
      </main>
    </div>
  );
}

export default App;
