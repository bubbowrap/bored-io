<template>
  <v-app>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    layout () {
      return 'Default'
    }
  },
  created () {
    // this.$store.dispatch('initActivities')
  }
}
</script>

<style>
  .v-toolbar__content {
    border-bottom: thin solid rgba(0,0,0,.1);
  }
</style>
