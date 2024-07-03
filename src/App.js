import React from "react";
import Friendlist from "./components/FriendList";
import friiends from "./friends.json";
// import data from "./data.json";
// import Statistics from "./components/Statistics";
import "./App.css";
const App = () => {
  return (
    <div>
      <Friendlist friends={friiends} />
    </div>
  );
};

export default App;
