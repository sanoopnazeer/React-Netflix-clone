import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {originals, action, trending, comedyMovies, horrorMovies, romanceMovies, documentaries} from './urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={comedyMovies} title='Comedy Movies' isSmall/>
      <RowPost url={horrorMovies} title='Horror Movies' isSmall/>
      <RowPost url={romanceMovies} title='Romance Movies' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
    </div>
  );
}

export default App;
