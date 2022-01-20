<template>
  <div class="d-flex align-center">
    <v-text-field
      class="input__search"
      label="Search movies..."
      v-model="search"
    ></v-text-field>
    <v-btn class="ml-2" @click="actions.fetchMovies()">Search</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import useStore from "../store/global";
export default defineComponent({
  name: "Search",
  props: {},
  setup() {
    const { state, mutations, actions } = useStore;

    const search = computed({
      get: () => state.params.title,
      set: (val) => mutations.setParams({ ...state.params, title: val }),
    });

    return { search, actions, state };
  },
});
</script>

<style>
.input__search .v-input__details {
  display: none;
}
</style>
