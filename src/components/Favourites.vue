<template>
  <v-card>
    <v-card-title class="justify-center">Favourites</v-card-title>
    <v-list>
      <v-list-item v-for="movie in state.favourites" :key="movie.imdbID">
        <v-btn
          data-test="favourite-remove"
          small
          icon
          class="mr-3"
          @click="mutations.removeFavourite(movie.imdbID)"
          ><v-icon>mdi-star-minus-outline</v-icon></v-btn
        >
        <div class="text-left">
          <v-list-item-title class="favourites__movie-title">{{
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
  name: "Favourites",
  setup() {
    const { state, mutations } = useStore;
    return { state, mutations };
  },
});
</script>

<style scoped></style>
