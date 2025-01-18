'use client';
import { useState } from 'react';
import movies from '../movie/data';  // Ensure the correct path
import '../../../style/movie.css'
import '../../../style/nav.css'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Navbar from '../../Navbar/page';
import * as React from 'react';



const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

export default function Home() {
  const [query, setQuery] = useState('');

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Navbar/>
      <Container>
        <div className='grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4'>
          {filteredMovies.map((movie, index) => (
            <div key={index} className='relative'>
              <HtmlTooltip
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
                      <PlayCircleIcon style={{ fontSize: '60px' }} className="play_movie" />
                    </div>
                    <h1 className='font-semibold'>{movie.title}</h1>
                    <p className='text-sm'>({movie.date_release})</p>
                  </div>
                </a>
              </HtmlTooltip>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
