<template>
  <div>
    <v-row>
      <v-col md="10" lg="7" xl="6">
        <h1 class="subheading grey--text text--darken-3">Never get bored again.</h1>
        <p class="grey--text text--darken-2 mt-2">Click <strong>'Find Activities'</strong> to nail down your criteria or <strong>'Surprise Me!'</strong> to get our suggestions.</p>
        <v-btn class="orange darken-2 white--text mr-2 mb-2" depressed>
          <v-icon left>mdi-magnify</v-icon>
          Find Activities
        </v-btn>
        <v-btn
          color="indigo"
          class="mb-2"
          outlined
          @click="getRandom"
        >
          <v-icon left>mdi-help</v-icon>
          Surprise Me!
        </v-btn>
      </v-col>
    </v-row>
    <div v-if="showActivities">
      <Activities :randomActivities="true" :saveBtn="true" />
    </div>
  </div>
</template>

<script>
import Activities from '@/components/Activities'

export default {
  data () {
    return {
      showActivities: false
    }
  },
  components: {
    Activities
  },
  methods: {
    getRandom () {
      this.showActivities = true
      this.$store.dispatch('getRandom')
    }
  }
}
</script>
