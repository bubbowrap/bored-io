<template>
  <div>
    <v-row>
      <v-col md="10" lg="7" xl="6">
        <h1 class="text-h4 indigo--text text--darken-3">Never get bored again.</h1>
        <p class="grey--text text--darken-2 mt-4 mb-6">Click <strong>'Find Activities'</strong> to get our suggestions.</p>
        <v-btn
        class="orange darken-2 white--text mr-2 mb-2"
        depressed
        :disabled="disabled"
        large
        @click="getRandom"
        >
          <v-icon left>mdi-magnify</v-icon>
          Find Activities
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
      showActivities: false,
      disabled: false
    }
  },
  components: {
    Activities
  },
  methods: {
    getRandom () {
      this.disabled = true
      this.showActivities = true
      this.$store.dispatch('getRandom')
      setTimeout(() => {
        this.disabled = false
      }, 200)
    }
  }
}
</script>
