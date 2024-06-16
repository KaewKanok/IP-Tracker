import { useState } from "react";

import "./App.css";

function App() {
  return (
    <div className="w-full h-full max-[375px]:bg-[url('assets/images/pattern-bg-mobile.png')] bg-[url('assets/images/pattern-bg-desktop.png')]">
      <div className="">
        <h1>IP Address Tracker</h1>
        <input type="text" />
        <button>select</button>
      </div>

      <div className="flex flex-col justify-center items-center gap-5 min-[1440px]:flex min-[1440px]:flex-row">
        <div>
          <h3>IP Address</h3>
          <p>192.212.174.101</p>
        </div>
        <div>
          <h3>Location</h3>
          <p>Brooklyn, NY 10001</p>
        </div>
        <div>
          <h3>Timezone</h3>
          <p>UTC -05:00</p>
        </div>
        <div>
          <h3>ISP</h3>
          <p>SpaceX Starlink</p>
        </div>
      </div>
    </div>
  );
}

export default App;
