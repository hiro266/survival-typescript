import { useState } from "react";
import "./App.css";

const LikeButton = () => {
  const [count, setCount] = useState(999);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button className="likeButton" onClick={handleClick}>
      ♥{count}
    </button>
  );
};

function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}

export default App;
