import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../contexts/LoadingContext/LoadingContext";
import { movieService } from "../services/movie";

export default function useMovieList() {

  const [loading, setLoading] =  useContext(LoadingContext);

  const [movieList, setMovieList] = useState([]);





  const fetchMovieList = async () => {
    setLoading({
      isLoading : true
    })
    
    
    const result = await movieService.fetchMovieListApi();
    setMovieList(result.data.content);

    setLoading({
      isLoading : false
    })
  };

  useEffect(() => {
    fetchMovieList();
  }, []);

  return movieList;
}
