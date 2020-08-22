<template>

    <v-select
      :items="items"
      label="Search Categories"
      filled
      v-model="category"
      class="mt-5 text-capitalize"
      @change="filterActivities"
    >
    </v-select>

</template>

<script>
export default {
  data () {
    return {
      items: ['education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork'],
      category: '',
      maxNum: 6
    }
  },
  methods: {
    filterActivities () {
      this.$store.dispatch('getFiltered', this.category)

      console.log(this.category)
    }
  }
}
</script>
