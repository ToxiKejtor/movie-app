import { reactive, readonly } from "@vue/composition-api";

export interface Params {
  title: string;
  page: number;
}

interface State {
  params: Params;
}

const state = reactive<State>({
  params: {
    title: "",
    page: 0,
  },
});

const mutations = {
  setParams(params: Params): void {
    state.params = params;
  },
};

const actions = {};

export default { state: readonly(state), actions, mutations };
