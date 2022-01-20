<template>
  <v-app>
    <v-main>
      <v-container>
        <Search />
        <Results />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";

export default Vue.extend({
  name: "App",
  components: { Search, Results },
});
</script>
