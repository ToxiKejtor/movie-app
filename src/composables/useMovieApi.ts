export interface Params {
  title: string;
  page: number;
}

export interface MoviesResult {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Record[];
}

export interface Record {
  Title: string;
  Year: number;
  imdbID: string;
}

export default function useMovieApi() {
  const fetchMovies = async (params: Params): Promise<MoviesResult> => {
    const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${params.title}&Page=${params.page}`;
    const data = await fetch(url);
    return await data.json();
  };
  return {
    fetchMovies,
  };
}
