<template>
  <div>
    <input type="text" v-model="input" placeholder="Add Grocery" />
    <input type="submit" @click="addGrocery()" />
    <ul>
      <li v-for="(item, index) in groceries" :key="item">
        {{ item }}
        <button @click="deleteGrocery(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input: "",
        groceries: []
      }
    },
    methods: {
      addGrocery() {
        this.groceries.push(this.input);
        this.input = "";
      },
      deleteGrocery(index) {
        this.groceries.splice(index, 1);
      }
    },
  }
</script>

<style lang="css" scoped>
  ul {
    list-style-type: none;
  }
</style>