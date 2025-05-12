import React from "react";
import Header from "./Header"; // Importing the Header component
import "./App.css"; // Importing the App-wide CSS
import Footer from "./Footer";
import PostSlider from "./PostSlider"; // Adjust path if needed


function App() {
  return (
    <div className="App">
      <Header />
      <PostSlider />
      <Footer /> {/* Add Footer Component Here */}
    </div>
  );
}

export default App;
