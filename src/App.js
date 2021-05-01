import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import {Data} from './Components/Data/Data';
import MovieList from "./Components/MovieList/MovieList"
import React,{useState} from 'react';
import {Route} from 'react-router-dom'
import MovieTrailer from './Components/MovieTrailer/MovieTrailer';

function App() {

  const [data,setData]=useState(Data)
  const [movieSearch,setMovieSearch]=useState("");
  const [movieSearchRating,setMovieSearchRating]=useState(0);
  const handleClick=(newMovie)=>{
      setData([...data,newMovie])
  }

  return (
    <div>
      <Route exact path='/'>
      <NavBar handleClick={handleClick} setMovieSearch={setMovieSearch} setMovieSearchRating={setMovieSearchRating}/>
      <MovieList Data={data} movieSearch={movieSearch} movieSearchRating={movieSearchRating}></MovieList>
      </Route>
      <Route path='/cards/:Id'>
      <MovieTrailer data={data}/>
      </Route>
      
    </div>
  );}
export default App;