<template>
  <v-col cols="1" sm="6" md="4">
    <v-card
      :class="completed ? 'disabled' : null"
    >
      <v-card-title class="text-capitalize">{{ activity.activity }}</v-card-title>
      <v-card-subtitle class="text-uppercase">{{ activity.type }}</v-card-subtitle>
      <v-card-text class="grey--text text--darken-4">
        # Participants:
        <v-icon v-for="n in activity.participants" :key="n">mdi-account</v-icon>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          v-if="activity.link"
          :href="activity.link"
          color="orange darken-2"
          text
          dark
          small
          target="_blank"
        >
          <v-icon left small>mdi-open-in-new</v-icon>
          Learn More
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          icon
          v-if="saveBtn"
          @click="saveActivity(activity)"
        >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          icon
          v-else
        >
          <v-icon>mdi-check-circle</v-icon>
        </v-btn>

        <v-btn
        icon
        @click="deleteActivity(activity)"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['activity', 'completed', 'saveBtn'],
  methods: {
    ...mapActions([
      'saveActivity',
      'deleteActivity'
    ])
  }
}
</script>

<style lang="scss">
.v-card.disabled {
  background-color: rgba(0,0,0,.05) !important;
  box-shadow: none !important;

  .v-card__title {
    text-decoration: line-through;
  }

  .v-card__title,
  .v-card__subtitle,
  .v-card__text {
    opacity: .5;
  }
}
</style>
