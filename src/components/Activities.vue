<template>
<div>
    <v-row v-if="activities.length">
      <Activity
        v-for="activity in activities"
        :key="activity.id"
        :activity="activity"
        :completed="activity.completed"
        :saveBtn="saveBtn">
      </Activity>
    </v-row>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import Activity from '@/components/Activity.vue'

export default {
  props: ['randomActivities', 'saveBtn', 'completed'],
  components: {
    Activity
  },
  computed: {
    activities () {
      if (this.completed) {
        return this.$store.getters.activities.filter(activity => activity.completed)
      }
      if (this.randomActivities) {
        return this.$store.getters.randomActivities
      }
      return this.$store.getters.activities.filter(activity => activity.completed === false)
    }
  }
}
</script>
