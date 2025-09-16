import React from "react";
import Portfolio from "./components/Portfolio";
import DownloadResume from "./components/DownloadResume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
   

      {/* Resume Download Button */}
      <div style={{ marginTop: "10px", textAlign: "center" }}>
        <DownloadResume />
      </div>

         {/* Portfolio Section */}
      <Portfolio />

<Footer/>

    </div>
  );
}

export default App;

