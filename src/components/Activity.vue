<template>
  <v-col cols="12" sm="auto" md="6" lg="4">
    <v-card
      :class="completed ? 'disabled' : null"
      color="cardBackground"
    >
      <v-card-title class="text-capitalize mb-1 ">{{ activity.activity }}</v-card-title>
      <v-card-subtitle class="text-uppercase">{{ activity.type }}</v-card-subtitle>
      <v-card-text class="bodyColor--text">
        # Participants:
        <v-icon v-for="n in activity.participants" :key="n">mdi-account</v-icon>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          v-if="activity.link"
          :href="activity.link"
          color="secondary"
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
        <template v-else>
          <v-btn
            icon
            @click="completeActivity(activity)"
          >
            <v-icon>mdi-check-circle</v-icon>
          </v-btn>

          <v-btn
          icon
          @click="deleteActivity(activity)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
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
      'completeActivity',
      'deleteActivity'
    ])
  }
}
</script>

<style lang="scss" scoped>
.v-card__title {
  word-break: normal;
  line-height: 1.25;
}

.v-card.disabled {
  background-color: rgba(0,0,0,.07) !important;
  box-shadow: none !important;

  .theme--dark & {
    background-color: rgba(255,255,255,.05) !important;
  }

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
