import "./App.css";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.plugco.in/public/take_home_sample_feed");
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  return <div>{isLoading ? <h1>Loading...</h1> : <Home data={data} />}</div>;
}

export default App;
