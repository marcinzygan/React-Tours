import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async function () {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <Tours tours={data} />
      </main>
    </>
  );
}

export default App;
