<template>
  <div>
    <v-row>
      <v-col>
        <h1 class="text-h4 headingColor--text">Completed Activities</h1>
        <Activities :completed="true">
          <v-col class="notifBar rounded mt-3">
            <p class="bodyColor--text mb-0">
              You haven't completed anything yet! Head back to your saved activities and get to work <v-icon>mdi-emoticon-happy</v-icon>
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
