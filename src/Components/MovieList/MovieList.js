import MovieCard from "../MovieCard/MovieCard"

export default function MovieList({Data,movieSearch,movieSearchRating}) {
    return (
    <div className="App">
    {Data.filter((el)=>el.movieName.toLowerCase().includes(movieSearch.trim())).filter((el)=>el.rating>=movieSearchRating)
    .map( (el,key) => <MovieCard key={key} el={el}/>)}
    </div>
);
}
