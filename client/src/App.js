import React from "react";
import SearchForm from "./components/SearchForm";
import Hospital from "./components/Hospital";
import Buttons from "./components/Buttons";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <SearchForm />
        <Buttons />
        <Hospital />
      </main>
    </>
  );
};

export default App;
