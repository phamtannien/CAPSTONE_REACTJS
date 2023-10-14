import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LoadingContext } from '../contexts/LoadingContext/LoadingContext';
import { movieService } from '../services/movie';

export default function useMovieDetail() {
    const [loading, setLoading] =  useContext(LoadingContext);

    const [detail, setDetail] = useState({})
    const params = useParams();
    useEffect(  ()=>{
        fetchMovieDetail()
        return () => {}

    },[])
    const fetchMovieDetail = async ()=>{
        setLoading({
            isLoading : true
          })
      const result = await  movieService.fetchMovieDetailApi(params.movieId)
      setDetail(result.data.content)
      setLoading({
        isLoading : false
      })
    }

    return detail
}
