import { reactive, readonly } from "@vue/composition-api";

interface State {
  search: string;
}

const state = reactive<State>({
  search: "",
});

const mutations = {};

const actions = {};

export default { state: readonly(state), actions, mutations };
