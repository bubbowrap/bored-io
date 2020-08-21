<template>
  <v-row>
    <Activity
      v-for="activity in activities"
      :key="activity.id"
      :activity="activity"
      :completed="activity.completed"
      :saveBtn="saveBtn">
    </Activity>
  </v-row>
</template>

<script>
import Activity from '@/components/Activity.vue'

export default {
  props: ['randomActivities', 'saveBtn'],
  components: {
    Activity
  },
  computed: {
    activities () {
      if (this.randomActivities) {
        return this.$store.getters.randomActivities
      }
      return this.$store.getters.activities
    }
  }
}
</script>
