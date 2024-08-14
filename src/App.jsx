import { useState } from "react";
import "./App.css";
import MedalTable from "./components/MedalTable";
import Title from "./components/Title";
import Input from "./components/Input";

function App() {
  //메달 현황
  const [medals, setmedals] = useState([]);

  return (
    <div className="container">
      <Title />
      <Input medals={medals} setmedals={setmedals} />
      <MedalTable medals={medals} setmedals={setmedals} />
    </div>
  );
}

export default App;
