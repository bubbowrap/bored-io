<template>
  <v-app>
    <v-app-bar
      app
      class="grey lighten-4"
      dense
      flat
    >

      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </div>

      <v-spacer></v-spacer>
      <div class="d-flex align-center subtitle-2">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="grey--text text--darken-2"
              text
              v-bind="attrs"
              v-on="on"
            >
              Save/Load Data
            </v-btn>
          </template>
          <v-list>
            <v-list-item
            @click="saveData()"
            >
              <v-list-item-title>Save Data</v-list-item-title>
            </v-list-item>
            <v-list-item
            @click="loadData()"
            >
              <v-list-item-title>Load Data</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <app-navigation />

    <v-main class="grey lighten-4">
      <v-container class="pa-8" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import appNavigation from './views/appNavigation.vue'

export default {
  name: 'App',
  components: {
    appNavigation
  }
}
</script>

<style>
  .v-toolbar__content {
    border-bottom: thin solid rgba(0,0,0,.1);
  }
</style>
