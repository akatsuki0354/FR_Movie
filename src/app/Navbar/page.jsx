'use client';
import { useState } from 'react';
import movies from '../Genre/movie/data';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
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

export default function Navbar() {
    const [query, setQuery] = useState('');

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <div className='nav'>
                <nav className='flex justify-between flex-wrap p-3 bg-sky-500 mb-3'>
                    <div className=" flex-wrap flex justify-center text-white">
                        <div className='logo'>
                            <h1 className='text-2xl font-bold'>
                                <a href="/">
                                    <PlayCircleIcon className='-mt-1' />
                                    <span>FG</span>
                                </a>
                            </h1>
                        </div>
                        <div className='ml-5 select font-semibold flex justify-center gap-3 mt-1'>
                            <a href="movie">Movies</a>
                            <a href="#tv-series">TV-Series</a>
                            <a href="#genre" className='genre'>Genre
                                <div className='movie_select'>
                                    <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-5 font-normal'>
                                        <a href="/Genre/All">All</a>
                                        <a href="/Genre/Animation">Animation</a>
                                        <a href="/Genre/Drama">Drama</a>
                                        <a href="/Genre/Action">Action</a>
                                        <a href="/Genre/Comedy">Comedy</a>
                                        <a href="/Genre/Fantasy">Fantasy</a>
                                        <a href="/Genre/Adventure">Adventure</a>
                                        <a href="/Genre/Crime">Crime</a>
                                        <a href="/Genre/Reality">Reality</a>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div>
                        <form action="">
                            <input
                                type="search"
                                placeholder='Search..'
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className='pl-3 p-1 mt-1 w-64 focus:outline-none rounded-lg'
                            />
                        </form>
                    </div>
                </nav>
            </div>
            {query ? (
                filteredMovies.length > 0 ? (
                    <Container className='mb-3'>
                        <h1>Your Search</h1>
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
                ) : (
                    <p className="text-center mt-4">No movies found for your search.</p>
                )
            ) : null}

        </div>
    );
}
