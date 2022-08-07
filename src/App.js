import React from "react";
import "./App.css";
import Form from "./components/Form";
import ReactSwitch from "react-switch";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const darkThemeEnabled = useSelector((state) => state.darkThemeEnabled);
  const dispatch = useDispatch();

  const darkThemeHandler = () => {
    dispatch({ type: "themeChange" });
  };

  let theme = "";

  return (
    <div className="App" id={(theme = darkThemeEnabled ? "Light" : "Dark")}>
      <Form />
      <div className="switch">
        <label> {theme}</label>
        <ReactSwitch onChange={darkThemeHandler} checked={theme === "Dark"} />
      </div>
    </div>
  );
}

export default App;
