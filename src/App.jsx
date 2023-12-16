import React from 'react';
import { useState } from "react";
import Clock from "./assets/components/Clock";



  function App () {
    const [showClock, setShowClock] = useState(true);
  
    return (
      <>
        <button
          className="clock-toggle"
          onClick={() => setShowClock(!showClock)}
        >
          {showClock ? 'Clock ON' : 'Clock OFF'}
        </button>
      
        {showClock && <Clock />}
      </>
    );
  
}

export default App
