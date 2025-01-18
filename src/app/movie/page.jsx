'use client';
import movies from './data';  // Ensure the correct path

export default function Home() {
  return (
    <div>
      <div className='nav'>
        <nav className='flex justify-between p-5 bg-sky-500 mb-3'>
          <div className="select text-white ">
            <div className='logo'>
              <h1 className='text-2xl font-bold'><span>FG</span> Movie</h1>
            </div>
            <div>
            </div>
          </div>
          <div>
            <input type="search" placeholder='Search..' className='pl-3 p-1 w-64 focus:outline-none rounded-lg' />
          </div>
        </nav>
      </div>
      <div className='grid place-items-center sm:grid-cols-2  md:grid-cols-3 gap-2  lg:grid-cols-4 '>
        {movies.map((movie, index) => (
          <div key={index}>
            <img
              src={movie.img}
              alt={`Poster of ${movie.title}`}
              className='rounded-lg'
            />
            <h1 className='font-semibold'>{movie.title}</h1>
            <p className='text-sm'>Date Release: {movie.date_release}</p>
            {/* <p>Plot: {movie.plot}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
