import React from "react";
const url = {
  key: "83f6d29e59d1ed5b257089f954abf8a1",
  base: "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
        <div className="location-box">
          <div className="location">New York City, US </div>
          <div className="date">9/22/2020</div>
        </div>
      </main>
    </div>
  );
}

export default App;
