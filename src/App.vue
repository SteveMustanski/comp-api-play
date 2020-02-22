<template>
  <div id="app">
    <GroceryList />
  </div>
</template>

<script>

import GroceryList from './components/GroceryList'

export default {
  name: 'App',
  components: {
    GroceryList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
