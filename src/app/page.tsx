'use client';
import movies from './movie/data';  // Ensure the correct path
import '../style/movie.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from '@mui/material';

export default function Home() {
  return (
    <div className=''>
      <div className='nav'>
        <nav className='flex justify-between p-3 bg-sky-500 mb-3'>
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
      <Container>
        <div className='grid place-items-center sm:grid-cols-2  md:grid-cols-3 gap-2  lg:grid-cols-4 '>
          {movies.map((movie, index) => (
            <div key={index} className='relative'>
              <a href="#">
                <img
                  src={movie.img}
                  alt={`Poster of ${movie.title}`}
                  className='rounded-lg'
                />

                <div className='movie_title bg-gradient-to-t from-gray-950 p-2 pt-12'>

                  <div className="absolute w-full -mt-16 hidden h-full flex justify-center items-center">
                    <PlayCircleIcon fontSize="default" className=" text-6xl play_movie" />
                  </div>

                  <h1 className='font-semibold'>{movie.title}</h1>
                  <p className='text-sm'>( {movie.date_release} )</p>
                  {/* <p>Plot: {movie.plot}</p> */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
