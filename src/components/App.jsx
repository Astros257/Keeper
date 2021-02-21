import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
//since our app.jsx is in the same folder as the header, footer and note we do not need to add
//the components extension in the file when importing them.

function App() {
  return (
    <div>
      <Header />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
