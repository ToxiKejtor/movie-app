<template>
  <v-card class="py-5" min-height="200">
    <v-card-subtitle
      class="text-center"
      v-if="state.status === 'init'"
      data-test="init"
    >
      Your search results will be shown here
    </v-card-subtitle>
    <v-card-subtitle
      class="text-center"
      data-test="loading"
      v-else-if="state.status === 'progress'"
    >
      <v-progress-circular indeterminate />
      Loading...
    </v-card-subtitle>

    <v-card-subtitle
      class="justify-center"
      data-test="empty"
      v-else-if="state.status === 'ready' && state.results.data.length === 0"
    >
      No results found
    </v-card-subtitle>
    <div class="px-3" v-else>
      <v-list>
        <v-list-item v-for="movie in state.results.data" :key="movie.imdbID">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                small
                icon
                v-bind="attrs"
                v-on="on"
                class="mr-3"
                @click="mutations.addFavourite(movie)"
                ><v-icon>mdi-star-plus</v-icon></v-btn
              >
            </template>
            <span>Add to favourites</span>
          </v-tooltip>
          <div class="text-left">
            <v-list-item-title class="results__movie-title">{{
              movie.Title
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ movie.Year }}</v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
      <PaginationButtons />
    </div>
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

<style scoped>
.results__movie-title {
  white-space: normal;
}
</style>
