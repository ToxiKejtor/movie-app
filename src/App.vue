<template>
  <v-app>
    <v-main>
      <v-container>
        <Search />
        <Results />
        <Favourites />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";
import Favourites from "@/components/Favourites.vue";

export default Vue.extend({
  name: "App",
  components: { Search, Results, Favourites },
});
</script>
