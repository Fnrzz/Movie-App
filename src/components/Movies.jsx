import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchApiMovies } from "../store/actions";
const Movies = () => {
  const movies = useSelector((state) => state.movies);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiMovies());
  }, [dispatch]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movies.map((movie) => (
          <div className="col d-flex" key={movie.imdbID}>
            <div className="card h-100 w-100">
              <img
                src={movie.Poster}
                className="card-img-top"
                style={{ height: "300px", objectFit: "cover" }}
                alt={movie.Title}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{movie.Title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
