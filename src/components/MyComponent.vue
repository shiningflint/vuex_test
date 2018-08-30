<template>
  <div>
    <p>Go bananas with vuex</p>
    <p>Current status: {{ currentStatus }}</p>
    <p>
      <button type="button" @click="toggleStatus">Toggle status</button>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    currentStatus () {
      return this.$store.state.currentStatus
    }
  },
  methods: {
    toggleStatus () {
      if (this.$store.state.currentStatus === 'F A L S E') {
        this.$store.dispatch('updateCurrentStatus', 'T R U E')
      } else {
        this.$store.dispatch('updateCurrentStatus', 'F A L S E')
      }
    }
  }
}
</script>
