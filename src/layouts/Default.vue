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
            @click.stop="confirmClear()"
            >
              <v-list-item-title>Clear Data</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>

    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Are you sure you want to erase the data?</v-card-title>

        <v-card-text>
          Clicking <strong>confirm</strong> will erase your activities in both the app and in the database (But go ahead, I literally don't care).
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="grey darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="orange darken-2"
            text
            @click="clearData"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
            <v-icon class="mr-1">mdi-emoticon-neutral-outline</v-icon>
            <strong class="subheading text-uppercase">Bored.af</strong>
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

    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="orange"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

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
// import { mapActions } from 'vuex'
// import store from '@/store'

export default {
  data () {
    return {
      drawer: true,
      dialog: false,
      snackbar: false,
      snackbarText: 'hey',
      timeout: 2000,
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
  methods: {
    confirmClear () {
      this.dialog = true
    },
    saveData () {
      this.$store.dispatch('saveData')
      this.snackbarText = 'Activities saved!'
      this.snackbar = true
    },
    loadData () {
      this.$store.dispatch('loadData')
      this.snackbarText = 'Activities loaded!'
      this.snackbar = true
    },
    clearData () {
      this.$store.dispatch('clearData')
      this.dialog = false
      this.snackbarText = 'Activities cleared!'
      this.snackbar = true
    }
  },
  created () {
    if (window.innerWidth < 600) {
      this.drawer = false
    }
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
