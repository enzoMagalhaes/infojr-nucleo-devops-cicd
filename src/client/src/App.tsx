import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const api_url: string = process.env.API_URL
  ? process.env.API_URL
  : "http://localhost:8080";

function App(): JSX.Element {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    axios
      .get<string>(api_url)
      .then((response: AxiosResponse<string>) => {
        setMessage(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}

export default App;
