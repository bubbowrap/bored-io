<template>
  <v-navigation-drawer
    color="indigo"
    app
    permanent
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
</template>

<script>
export default {
  data () {
    return {
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
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>
