<template>
  <v-card class="d-flex flex-column justify-center py-5" min-height="200">
    <v-list>
      <v-list-item v-for="movie in state.results.data" :key="movie.imdbID">
        <v-btn small icon class="mr-3" @click="mutations.addFavourite(movie)"
          ><v-icon>mdi-star-plus</v-icon></v-btn
        >
        <div class="text-left">
          <v-list-item-title class="results__movie-title">{{
            movie.Title
          }}</v-list-item-title>
          <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
        </div>
      </v-list-item>
    </v-list>
    <PaginationButtons />
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

import useStore from "../store/global";

import PaginationButtons from "@/components/PaginationButtons.vue";

export default defineComponent({
  name: "Results",
  components: {
    PaginationButtons,
  },
  setup() {
    const { state, mutations } = useStore;

    return {
      state,
      mutations,
    };
  },
});
</script>

<style scoped></style>
