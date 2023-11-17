import "./App.css";
import Textfield from "./components/Textfield";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("rgba(125, 245, 245, 0.046)");

  const toggletheme = () => {
    if (theme === "rgba(125, 245, 245, 0.046)") {
      setTheme("black");
    } else {
      setTheme("rgba(125, 245, 245, 0.046)");
    }
  };
  return (
    <>
      <Textfield theme={theme} toggletheme={toggletheme} />
    </>
  );
}

export default App;
