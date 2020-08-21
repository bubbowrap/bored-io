<template>
  <div class="layout--default">
    <v-app-bar
      app
      class="grey lighten-4"
      dense
      flat
    >

      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
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
              Manage Data
              <v-icon right>mdi-menu-down</v-icon>
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
            <v-list-item
            @click="clearData()"
            >
              <v-list-item-title>Clear Data</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      color="indigo"
      v-model="drawer"
      mobile-breakpoint="600"
      app
      dark
    >
      <v-list-item>
        <v-list-item-content class="pa-0">
          <router-link
            class="title d-flex"
            to="/"
            style="text-decoration: none; color: inherit;"
          >
            <v-icon class="mr-1">mdi-power</v-icon>
            <strong class="subheading text-uppercase">Bored.io</strong>
          </router-link>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list nav>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <p class="text-center indigo--text text--lighten-3">Version 0.0.0</p>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main class="grey lighten-4">
      <v-container class="pa-8 pt-2" fluid>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </div>
</template>

<script>
// import appNavigation from '@/views/appNavigation.vue'

export default {
  data () {
    return {
      drawer: true,
      links: [
        {
          icon: 'mdi-view-dashboard',
          path: '/',
          text: 'Home'
        },
        {
          icon: 'mdi-heart',
          path: '/saved',
          text: 'Saved Activities'
        },
        {
          icon: 'mdi-check-circle',
          path: '/completed',
          text: 'Completed Activities'
        },
        {
          icon: 'mdi-information',
          path: '/about',
          text: 'About'
        }
      ]
    }
  },
  components: {
    // appNavigation
  }
}
</script>

<style lang="scss">
  .template--default,
  .v-main {
    height: 100%;
    min-height: 100vh;
  }
</style>
