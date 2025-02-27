import { JSX, useState } from "react";
export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState((currentState) => !currentState);
  };
  return <button onClick={handleClick}>{state ? "ON" : "OFF"}</button>;
};
