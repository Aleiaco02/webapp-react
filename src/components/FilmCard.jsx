import { Link } from "react-router-dom";

const FilmCard = ({ movieProp }) => {
    const { id, title, director, genre, image } = movieProp;

    return (
        <div className="col">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden">
                <div className="image-container">
                    <img
                        src={image}
                        alt={title}
                        className="card-img-top"
                    />
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-primary fw-semibold">{title}</h5>
                    <p className="card-text mb-1 text-muted">
                        <strong>Director:</strong> {director}
                    </p>
                    <p className="card-text text-secondary">
                        <strong>Genre:</strong> {genre}
                    </p>
                    <div className="mt-auto">
                        <Link to={`/movies/${id}`} className="btn btn-outline-primary w-100">
                            See more
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilmCard;
