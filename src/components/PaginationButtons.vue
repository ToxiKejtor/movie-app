<template>
  <div>
    <div class="d-flex justify-space-between">
      <v-btn
        data-test="button-previous"
        elevation="2"
        class="justify-self-start"
        v-if="isPreviousPage"
        icon
        @click="fetchPaginated('prev')"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer v-else></v-spacer>
      <v-btn
        data-test="button-next"
        elevation="2"
        class="justify-self-end"
        v-if="isNextPage"
        icon
        @click="fetchPaginated('next')"
      >
        <v-icon>mdi-arrow-right</v-icon>
      </v-btn>
      <v-spacer v-else></v-spacer>
    </div>
    <div class="text-center">
      {{ state.results.page }} / {{ state.results.total_pages }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "@vue/composition-api";
import { Params } from "@/composables/useMovieApi";

import useStore from "../store/global";

export default defineComponent({
  name: "PaginationButtons",
  setup() {
    const { state, mutations, actions } = useStore;
    const isNextPage = computed(
      (): boolean => state.results.page < state.results.total_pages
    );

    const isPreviousPage = computed((): boolean => state.results.page > 1);

    const fetchPaginated = (direction: "next" | "prev"): void => {
      let newParams: Params;
      direction === "next"
        ? (newParams = { ...state.params, page: state.params.page + 1 })
        : (newParams = { ...state.params, page: state.params.page - 1 });
      mutations.setParams(newParams);
      actions.fetchMovies();
    };

    return {
      state,
      isNextPage,
      isPreviousPage,
      fetchPaginated,
    };
  },
});
</script>

<style scoped></style>
