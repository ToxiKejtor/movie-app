<template>
  <v-app>
    <v-main>
      <v-container>
        <Search />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "@/components/Search";

export default Vue.extend({
  name: "App",
  components: { Search },
});
</script>
