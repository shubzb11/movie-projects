import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import MovieCard from "./Movie";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
        <Route path="/add" component={AddMovie} />
        <MovieCard />
      </Switch>
    </Router>
  );
}

export default App;
