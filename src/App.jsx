import "./styles.css";
import Navbar from "./components/navbar";
import Menu from "./components/menu";
import { choices } from "./components/data";
import { useState } from "react";

const App = () => {
  const menu = choices;
  const [newMenu, setNewMenu] = useState(menu);
  // console.log(choices);
  return (
    <div className="App">
      <Navbar menu={menu} newMenu={newMenu} setNewMenu={setNewMenu} />
      <Menu newMenu={newMenu} setNewMenu={setNewMenu} />
    </div>
  );
};

export default App;
