import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useSelector } from 'react-redux';
import GPTSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header/>
      {showGptSearch ? (
        <GPTSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
      {/*
      MainContainer
        -VideoBackground
        -VideoTitle
        SecondaryContainer
          -MovieList * n
          -cards * n
      */}
    </div>
  )
}

export default Browse