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
  props: {
    currentStatus: String,
    toggleStatus: Function
  }
}
</script>
