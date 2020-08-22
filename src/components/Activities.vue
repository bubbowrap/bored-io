<template>
<div>
    <transition-group
    name="list"
    v-if="activities.length"
    class="row"
    appear
    @before-leave="beforeLeave"
    >
      <Activity
        v-for="activity in activities"
        :key="activity.key"
        :activity="activity"
        :completed="activity.completed"
        :saveBtn="saveBtn">
      </Activity>
    </transition-group>
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
  methods: {
    beforeLeave (el) {
      console.log('hey')
      const { marginLeft, marginTop, width, height } = window.getComputedStyle(el)
      el.style.left = `${el.offsetLeft - parseFloat(marginLeft, 10)}px`
      el.style.top = `${el.offsetTop - parseFloat(marginTop, 10)}px`
      el.style.width = width
      el.style.height = height
    }
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
