import React, { useState } from "react";
import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Task from "./components/Task/Task";
import Calendar from "./components/Calendar/Calendar";
import Hierarchy from "./components/Hierarchy/Hierarchy";
import PopUpWrapper from "./components/PopUps/PopUpWrapper";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <div className="App">
      {showPopUp &&
        <PopUpWrapper showPopUp={showPopUp} setShowPopUp={setShowPopUp} />}
      <Sidebar setShowPopUp={setShowPopUp} />
      <div className="main-content">
        <div className="top-row">
          <Task />
          <Calendar />
        </div>
        <div className="bottom-row">
          <Hierarchy />
        </div>
      </div>
    </div>
  );
}

export default App;
