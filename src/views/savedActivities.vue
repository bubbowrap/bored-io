<template>
  <v-layout>
    <v-row>
      <v-col cols="12">
        <h1 class="subheading grey--text text--darken-3">Saved Activities</h1>
      </v-col>

      <v-col
        v-for="activity in activities"
        :key="activity.key"
        cols="4"
      >
        <Activity :activity="activity" />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import Activity from '@/components/Activity.vue'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['activities'])
  },
  components: {
    Activity
  }
}
</script>
