import React, { useState, useEffect } from "react";
import SearchBar from "./Searchbar/SearchBar";
import SearchedUser from "./Searcheduser/SearchedUser";
import ClearBtn from "./ClearBtn/ClearBtn";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});
  const url = `https://api.github.com/users/${username}`
  
  useEffect(() => { 
    if(username !== ''){
    fetch(url, {
      'method': 'GET',
      'headers':{
        'Authorization':  'Token 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',
      },
  })
      .then(res => res.json())
      .then(json => {
        if (json && json.message !== "Not Found") {
          setData(json);
        }else{
          setData({});
        }
      })
    }
  } , [username])

  return (
    <div className="App">
        <div className="container">
          <SearchBar setUsername={setUsername} username={username} />
          <ClearBtn setUsername={setUsername}  username={username} setData={setData} />
        </div>
       <SearchedUser data={data} />
    </div>
  );
}

export default App;
