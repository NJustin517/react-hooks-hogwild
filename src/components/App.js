import React, { useState } from "react";
import Nav from "./Nav";
import CardsList from "./CardsList";

import hogs from "../porkers_data";

function App() {
  const [showGreasedPigs, setShowGreasedPigs] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const piggies = [...hogs].sort(compare);

  const filteredPiggies = piggies.filter((piggy) => piggy.greased);

  function compare(a, b) {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    return 0;
  }

  return (
    <div className="App">
      <Nav />
      <br></br>
      <button
        onClick={() => setShowGreasedPigs(!showGreasedPigs)}
        className="ui button"
      >
        Show Greased Pigs
      </button>
      <br></br>
      <br></br>
      <span>
        <p>Sort By:</p>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </span>
      <br></br>
      <br></br>
      <CardsList hogs={showGreasedPigs ? filteredPiggies : piggies} />
    </div>
  );
}

export default App;
