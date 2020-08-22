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
    this.$store.dispatch('initActivities')
  }
}
</script>

<style>
  .v-toolbar__content {
    border-bottom: thin solid rgba(0,0,0,.1);
  }

  .list-enter-active {
    transition: .2 ease;
  }

  .list-leave-active {
    transition: opacity .2s ease;
    position: absolute;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateX(0);
  }

  .list-move {
    transition: .2s ease;
  }
</style>
