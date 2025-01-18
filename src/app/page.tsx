'use client';
import movies from './movie/data';  // Ensure the correct path
import '../style/movie.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import * as React from 'react';



const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    // maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));
export default function Home() {

  return (
    <div className=''>
      <div className='nav'>
        <nav className='flex justify-between flex-wrap p-3 bg-sky-500 mb-3'>
          <div className="select flex-wrap flex justify-center text-white ">
            <div className='logo'>
              <h1 className='text-2xl font-bold'><PlayCircleIcon className='-mt-1'/><span>FG</span></h1>
            </div>
            <div className='ml-5 font-semibold flex justify-center gap-3 mt-1'>
              <a href="">Movies</a>
              <a href="">TV-Series</a>
              <a href="">Genre</a>
            </div>
          </div>
          <div>
            <input type="search" placeholder='Search..' className='pl-3 p-1 mt-1 w-64 focus:outline-none rounded-lg' />
          </div>
        </nav>
      </div>
      <Container>
        <div className='grid place-items-center sm:grid-cols-2  md:grid-cols-3 gap-2  lg:grid-cols-4 '>
          {movies.map((movie, index) => (
            <div key={index} className='relative'>
              <HtmlTooltip arrow
                title={
                  <React.Fragment>
                    <Typography color="inherit">{movie.title}</Typography>
                    <p>{movie.plot}</p>
                  </React.Fragment>
                }
              >
              <a href="#">
                <img
                  src={movie.img}
                  alt={`Poster of ${movie.title}`}
                  className='rounded-lg'
                />
                <div className='movie_title bg-gradient-to-t from-gray-950 p-2 pt-12 relative'>
                  <div className="absolute w-full -mt-20 hidden h-full flex justify-center items-center">
                  <PlayCircleIcon  style={{ fontSize: '60px' }} className="play_movie" />

                  </div>
                  <h1 className='font-semibold'>{movie.title}</h1>
                  <p className='text-sm'>( {movie.date_release} )</p>
                  {/* <p>Plot: {movie.plot}</p> */}
                </div>
              </a>
            </HtmlTooltip>
            </div>
          ))}
    </div>
      </Container >
    </div >
  );
}
