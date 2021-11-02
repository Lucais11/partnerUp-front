import React, { useEffect } from "react";

const http = async (path, method, payload) => {
  const serverUrl = process.env.REACT_APP_API || "http://localhost:5000";
  const options = {
    method,
  };

  if (payload) {
    options.body = JSON.stringify(payload);
    options.headers = { "Content-Type": "application/json" };
  }
  const res = await window.fetch(`${serverUrl}/${path}`, options);
  const data = await res.json();
  console.log(data);
};

const App = () => {
  useEffect(() => {
    http("mac", "POST", {
      kind: "laptop",
      price: 1200,
      color: "black",
    });
  });
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
