<template>
  <v-card class="d-flex flex-column justify-center py-5" min-height="200">
    <v-list>
      <v-list-item v-for="movie in state.results.data" :key="movie.imdbID">
        <div class="text-left">
          <v-list-item-title class="results__movie-title">{{
            movie.Title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import useStore from "../store/global";

export default defineComponent({
  name: "Results",
  setup() {
    const { state } = useStore;

    return {
      state,
    };
  },
});
</script>

<style scoped></style>
