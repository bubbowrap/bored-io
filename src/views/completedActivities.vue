<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="subheading grey--text text--darken-3">Completed Activities</h1>
      </v-col>
    </v-row>
    <Activities />
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
