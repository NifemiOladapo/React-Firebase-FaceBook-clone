import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";
import Widgets from "./Widgets";
import Login from "./Login";

const App = () => {
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState("");
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? (
        <Login
          user={user}
          setUser={setUser}
          setUserName={setUserName}
          setUserPic={setUserPic}
        />
      ) : (
        <>
          <Header userName={userName} userPic={userPic} />
          <div className="app__body">
            <Sidebar userPic={userPic} userName={userName} />
            <Feed userName={userName} userPic={userPic} />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
