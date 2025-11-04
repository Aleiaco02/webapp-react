import { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "../components/FilmCard";

const HomePage = () => {
    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios.get("http://localhost:3000/api/movies")
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));
    };

    useEffect(fetchMovies, []);

    return (
        <div className="container py-5">
            <h1 className="text-center text-danger mb-5 fw-bold display-4">🎬 BoolFlix</h1>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <FilmCard key={movie.id} movieProp={movie} />
                    ))
                ) : (
                    <div className="text-center text-muted fs-5">Loading movies...</div>
                )}
            </div>
        </div>
    );
};

export default HomePage;

