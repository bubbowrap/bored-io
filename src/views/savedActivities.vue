<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-h4 indigo--text text--darken-3">Saved Activities</h1>
        <Activities>
          <v-col class="grey lighten-2 rounded-sm mt-3">
            <p class="grey--text text--darken-1 mb-0">
              You haven't saved anything yet! Head back to the homepage to bookmark some activities.
            </p>
          </v-col>
        </Activities>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Activities from '@/components/Activities.vue'

export default {
  components: {
    Activities
  }
}
</script>
