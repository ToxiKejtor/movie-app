<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-spacer></v-spacer>
          <v-col :cols="8">
            <Search />
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row>
          <v-col :cols="12" :sm="6" :md="8"><Results /></v-col>
          <v-col :cols="12" :sm="6" :md="4"><Favourites /></v-col>
        </v-row>
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
