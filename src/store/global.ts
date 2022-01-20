import { reactive, readonly } from "@vue/composition-api";
import useMovieApi, { Params, MoviesResult } from "@/composables/useMovieApi";

interface State {
  params: Params;
  results: MoviesResult;
}

const { fetchMovies } = useMovieApi();
const state = reactive<State>({
  params: {
    title: "",
    page: 0,
  },
  results: {
    page: 0,
    per_page: 0,
    total: 0,
    total_pages: 0,
    data: [],
  },
});

const mutations = {
  setParams(params: Params): void {
    state.params = params;
  },
  setResults(results: MoviesResult): void {
    state.results = results;
  },
};

const actions = {
  async fetchMovies(): Promise<void> {
    const results = await fetchMovies(state.params);
    mutations.setResults(results);
  },
};

export default { state: readonly(state), actions, mutations };
