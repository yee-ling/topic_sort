import { useState } from "react";
import topics from "./data";
import Html from "./components/html";
import Css from "./components/css";
import JavaScript from "./components/javascript";
import Easy from "./components/easy";
import Medium from "./components/medium";
import Hard from "./components/hard";
import "./App.css";

function App() {
  const [sortByCategory, setSortByCategory] = useState("category");
  const [sortByDifficulty, setSortByDifficulty] = useState("");

  const sortByCategoryHandler = () => {
    setSortByCategory("category");
    setSortByDifficulty("");
  };

  const sortByDifficultyHandler = () => {
    setSortByDifficulty("difficulty");
    setSortByCategory("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <button onClick={sortByCategoryHandler}>Sort By Category</button>
        <button onClick={sortByDifficultyHandler}>Sort By Difficulty</button>
      </div>

      {sortByCategory && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Html />
          </div>
          <div>
            <Css />
          </div>
          <div>
            <JavaScript />
          </div>
        </div>
      )}

      {sortByDifficulty && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Easy />
          </div>
          <div>
            <Medium />
          </div>
          <div>
            <Hard />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
