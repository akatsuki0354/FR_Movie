'use client';
import movies from '../app/blog/data';  // Ensure the correct path

export default function Home() {
  return (
    <div>
      {movies.map((movie, index) => (
        <div key={index} style={{ marginBottom: "1em" }}>
          <img
            src={movie.img}
            alt={`Poster of ${movie.title}`}
            style={{ width: "300px", height: "auto", marginTop: "1em" }}
          />
          <h1>Title: {movie.title}</h1>
          <p>Date Release: {movie.date_release}</p>
          {/* <p>Plot: {movie.plot}</p> */}
        </div>
      ))}
    </div>
  );
}
