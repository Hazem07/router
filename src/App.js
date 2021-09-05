
import Add from './component/Add';
import './App.css';
import Footer from './component/footer/Footer';
import Movielist from './component/Movielist/Movielist';
import SearchAppBar from './component/Navbar/Partone';
import { useState } from 'react';
import { MoviesData } from './component/MoviesData';
import { Route } from 'react-router-dom';

import  Watch  from "./component/Watch";
import { Switch } from 'react-router-dom';
function App() {
const [movies, setMoviesData] = useState(MoviesData)
const [text, setText] = useState("");
const [rate, setRate] = useState("");
const addMovie=(Movie)=>setMoviesData(movies.concat(Movie))

  return (
  <div className="App">
    <div>
    <SearchAppBar setText={setText} setRate={setRate} rate={rate}/>
    </div>
     <Switch>
    <Route path="/watch" component={Watch}/>
    <Route path="/watch"/>
    <Route exact path="/" >
    <Add haz={addMovie}/>
    <div>
    <Movielist Data={movies} abc={text} cba={rate} /> 
    </div>
    </Route>
    
    <div>
       <Footer/>
    </div>
 </Switch>
    </div>
  );
  }

export default App;
