import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FilmReview from "../components/FilmReview";
import ReviewForm from "../components/ReviewForm";

const FilmPage = () => {
    const redirect = useNavigate();
    const [movie, setMovie] = useState(null);
    const { id } = useParams();

    const fetchMovie = () => {
        axios.get(`http://localhost:3000/api/movies/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => {
                console.error(error);
                if (error.response?.status === 404) redirect("/404");
            });
    };

    useEffect(fetchMovie, [id]);

    if (!movie) {
        return <div className="text-center mt-5">Loading movie...</div>;
    }

    return (
        <>
            <div className="container py-5">
                <header className="border-bottom pb-3 mb-4">
                    <div className="d-flex flex-column flex-md-row align-items-start gap-4">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="rounded shadow"
                            style={{ width: "300px", height: "450px", objectFit: "cover" }}
                        />
                        <div>
                            <h1 className="text-primary">{movie.title}</h1>
                            <h4 className="text-muted"><i>By {movie.director}</i></h4>
                            <p className="mt-3 text-secondary">
                                <strong>Genre:</strong> {movie.genre}
                            </p>
                        </div>
                    </div>
                </header>

                <section id="reviews" className="mb-5">
                    <header className="d-flex justify-content-between align-items-center mb-3">
                        <h4>Our community reviews</h4>
                        <h5>Average vote: {movie.average_vote ?? "N/A"}</h5>
                    </header>

                    {movie.reviews && movie.reviews.length > 0 ? (
                        movie.reviews.map(review => (
                            <FilmReview key={review.id} reviewProp={review} />
                        ))
                    ) : (
                        <p className="text-muted">No reviews yet.</p>
                    )}
                </section>

                <ReviewForm idProp={id} onReviewAdded={fetchMovie} />

                <footer className="border-top pt-3">
                    <Link className="btn btn-secondary" to="/">← Back to home</Link>
                </footer>
            </div>

        </>
    );
};

export default FilmPage;
