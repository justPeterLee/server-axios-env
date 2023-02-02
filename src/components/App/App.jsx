import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gif, setGif] = useState('')
  useEffect(() => {
    axios
      .get("/giphy")
      .then((response) => {
        console.log(response.data.data[0]);
        setGif(response.data.data[0].url)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">APIS</h1>
        <h4>
          <i>APIS</i>
        </h4>
      </header>
      <br />


    </div>
  );
}

export default App;
