import { reactive, readonly } from "@vue/composition-api";
import useMovieApi, {
  Params,
  MoviesResult,
  Record,
} from "@/composables/useMovieApi";

interface State {
  params: Params;
  results: MoviesResult;
  favourites: Record[];
}

const { fetchMovies } = useMovieApi();
const state = reactive<State>({
  params: {
    title: "",
    page: 1,
  },
  results: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
  favourites: [],
});

const mutations = {
  setParams(params: Params): void {
    state.params = params;
  },
  setResults(results: MoviesResult): void {
    state.results = results;
  },
  addFavourite(item: Record): void {
    if (!state.favourites.includes(item)) {
      state.favourites.push(item);
    }
  },
  removeFavourite(id: string): void {
    state.favourites = state.favourites.filter((item) => item.imdbID !== id);
  },
};

const actions = {
  async fetchMovies(): Promise<void> {
    const results = await fetchMovies(state.params);
    mutations.setResults(results);
  },
};

export default { state: readonly(state), actions, mutations };
