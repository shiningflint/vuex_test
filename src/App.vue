<template>
  <div id="app">
    <my-component
      :currentStatus="currentStatus"
      :toggleStatus="toggleStatus"
    />
  </div>
</template>

<script>
import MyComponent from './components/MyComponent.vue'

export default {
  name: 'app',
  components: {
    MyComponent
  },
  data () {
    return  {
      currentStatus: 'F A L S E'
    }
  },
  methods: {
    toggleStatus () {
      if (this.currentStatus === 'F A L S E') {
        this.currentStatus = 'T R U E'
      } else {
        this.currentStatus = 'F A L S E'
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
