import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id);
    setData(newTours);
  };
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
  if (data.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>There is no more Available tours</h2>
          <button onClick={fetchData} className="btn">
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <Tours tours={data} removeTour={removeTour} />
      </main>
    </>
  );
}

export default App;
