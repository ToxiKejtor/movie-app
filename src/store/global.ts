import { reactive, readonly } from "@vue/composition-api";
import useMovieApi, {
  Params,
  MoviesResult,
  Record,
} from "@/composables/useMovieApi";

type Status = "init" | "progress" | "ready";

interface State {
  params: Params;
  results: MoviesResult;
  favourites: Record[];
  status: Status;
}

const { fetchMovies } = useMovieApi();
const state = reactive<State>({
  status: "init",
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
  setStatus(status: Status): void {
    state.status = status;
  },
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
    mutations.setStatus("progress");
    const results = await fetchMovies(state.params);
    mutations.setResults(results);
    mutations.setStatus("ready");
  },
};

export default { state: readonly(state), actions, mutations };
